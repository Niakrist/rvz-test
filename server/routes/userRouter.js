const Router = require("express");
const router = new Router();
const serController = require("../controllers/userController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/registration", serController.registration);
router.post("/login", serController.login);
router.get("/auth", authMiddleware, serController.check);

module.exports = router;
