const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter.js");
const rollingRouter = require("./rollingRouter.js");
const rowRouter = require("./rowRouter.js");
const loadRouter = require("./loadRouter.js");
const deviceRouter = require("./deviceRouter.js");

router.use("/user", userRouter);
router.use("/rolling", rollingRouter);
router.use("/row", rowRouter);
router.use("/load", loadRouter);
router.use("/device", deviceRouter);
// router.use("/basket");

module.exports = router;
