const express = require("express");
const router = express.Router();

const catalogsStore = require("../store/catalogs");
const auth = require("../middleware/auth");
const catalogMapper = require("../mappers/catalogs");

router.get("/listings", auth, (req, res) => {
  const catalogs = catalogsStore.filterCatalogs(
    (catalog) => catalog.userId === req.user.userId
  );
  const resources = catalogs.map(catalogMapper);
  res.send(resources);
});

module.exports = router;
