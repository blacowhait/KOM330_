const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  return res.status(200).json({
    message:
      "Welcome to API. Check the documentation for more information",
  });
});

module.exports = router;