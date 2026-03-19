const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/catalogs");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const catalogMapper = require("../mappers/catalogs");
const config = require("config");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(1),
  categoryId: Joi.number().required().min(1),
  location: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  }).optional(),
  // FormData sends "images" as file parts; multer puts them in req.files. Allow/strip any "images" in body so Joi doesn't reject.
  images: Joi.any().strip(),
};

const parseFormBody = (req, res, next) => {
  const price = parseFloat(req.body.price);
  if (req.body.price !== undefined && req.body.price !== "" && !Number.isNaN(price))
    req.body.price = price;
  const categoryId = parseInt(req.body.categoryId, 10);
  if (req.body.categoryId !== undefined && req.body.categoryId !== "" && !Number.isNaN(categoryId))
    req.body.categoryId = categoryId;
  if (req.body.location !== undefined && req.body.location !== "") {
    if (typeof req.body.location === "string") {
      try {
        const parsed = JSON.parse(req.body.location);
        req.body.location =
          parsed && typeof parsed.latitude === "number" && typeof parsed.longitude === "number"
            ? parsed
            : undefined;
      } catch (e) {
        req.body.location = undefined;
      }
    }
  } else {
    req.body.location = undefined;
  }
  next();
};

const validateCategoryId = (req, res, next) => {
  if (!categoriesStore.getCategory(parseInt(req.body.categoryId)))
    return res.status(400).send({ error: "Invalid categoryId." });

  next();
};

router.get("/", (req, res) => {
  const catalogs = store.getCatalogs();
  const resources = catalogs.map(catalogMapper);
  res.send(resources);
});

router.post(
  "/",
  [
    upload.array("images", config.get("maxImageCount")),
    parseFormBody,
    validateWith(schema),
    validateCategoryId,
    auth,
    imageResize,
  ],

  async (req, res) => {
    if (!req.images || req.images.length === 0) {
      return res.status(400).send({
        error: "At least one image is required. If you selected an image, try again or check your connection.",
      });
    }
    const catalog = {
      title: req.body.title,
      price: parseFloat(req.body.price),
      categoryId: parseInt(req.body.categoryId),
      description: req.body.description,
    };
    catalog.images = req.images.map((fileName) => ({ fileName: fileName }));
    if (req.body.location) catalog.location = req.body.location;
    if (req.user) catalog.userId = req.user.userId;

    store.addCatalog(catalog);

    res.status(201).send(catalog);
  }
);

module.exports = router;
