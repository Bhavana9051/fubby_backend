const express = require("express");
const router = express.Router();

const store = require("../store/catalogs");
const auth = require("../middleware/auth");
const catalogMapper = require("../mappers/catalogs");

router.get("/:id", auth, (req, res) => {
  const catalog = store.getCatalog(parseInt(req.params.id));
  if (!catalog) return res.status(404).send();
  const resource = catalogMapper(catalog);
  res.send(resource);
});

module.exports = router;
