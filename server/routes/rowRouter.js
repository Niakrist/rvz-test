const Router = require("express");
const router = new Router();
const rowController = require("../controllers/rowController.js");

router.post("/", rowController.create);
router.get("/", rowController.getAll);
// router.get("/:category", rowController.getCategory);
router.put("/:id", rowController.put);
router.delete("/:id", rowController.delete);

module.exports = router;
