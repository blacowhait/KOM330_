const express = require("express");
const router = express.Router();
/*const homeRouter = require("./home");*/
const authRouter = require("./auth");
/*const userRouter = require("./user");
const adminRouter = require("./admin");*/

router.get("/", function (req, res, next) {
  return res.status(200).json({
    message: "Welcome to API. Check the documentation for more information",
  });
});
router.use("/auth", authRouter);
/*router.use("/home", homeRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);*/

module.exports = router;
