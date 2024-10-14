const Router = require("express");
const router = new Router();
const rollingController = require("../controllers/rollingController.js");
const checkRole = require("../middleware/checkMiddleware.js");

router.post("/", checkRole("ADMIN"), rollingController.create);
router.get("/", rollingController.getAll);
// router.get("/:category", rollingController.getCategory);
router.put("/:id", rollingController.put);
router.delete("/:id", rollingController.delete);

module.exports = router;
