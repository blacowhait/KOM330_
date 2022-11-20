const express = require("express");
const router = express.Router();
const homeRouter = require("./home");
const authRouter = require("./auth");


router.get("/", function (req, res, next) {
  return res.status(200).json({
    message: "Welcome to API. Check the documentation for more information",
  });
});
router.use("/auth", authRouter);
router.use("/home", homeRouter);

module.exports = router;
