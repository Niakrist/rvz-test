const Router = require("express");
const loadController = require("../controllers/loadController.js");
const checkRole = require("../middleware/checkMiddleware.js");

const router = new Router();

router.post("/", checkRole("ADMIN"), loadController.create);
router.get("/", loadController.getAll);
// router.get("/:category", loadController.getCategory);
router.put("/:id", loadController.put);
router.delete("/:id", loadController.delete);

module.exports = router;
