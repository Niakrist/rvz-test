const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController.js");

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getById);
router.put("/:id", deviceController.put);
router.delete("/:id", deviceController.delete);

module.exports = router;
