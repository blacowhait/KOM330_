const express = require("express");
const router = express.Router();
const recordRouter = require("./record");
const spjRouter = require("./spj");
const rabRouter = require("./rab");

router.use("/record",recordRouter);
router.use("/spj" ,spjRouter);
router.use("/rab" ,rabRouter);

module.exports = router;