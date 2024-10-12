const Router = require("express");
const router = new Router();
const rollingController = require("../controllers/rollingController.js");
const checkRole = require("../middleware/checkMiddleware.js");

router.post("/", checkRole("ADMIN"), rollingController.create);
router.get("/", rollingController.getAll);
router.get("/:category", rollingController.getCategory);
router.put("/", rollingController.put);
router.delete("/", rollingController.create);

module.exports = router;
