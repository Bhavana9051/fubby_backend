const express = require("express");
const router = express.Router();

const usersStore = require("../store/users");
const catalogsStore = require("../store/catalogs");
const auth = require("../middleware/auth");

router.get("/:id", auth, (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersStore.getUserById(userId);
  if (!user) return res.status(404).send();

  const catalogs = catalogsStore.filterCatalogs(
    (catalog) => catalog.userId === userId
  );

  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    listings: catalogs.length,
  });
});

module.exports = router;
