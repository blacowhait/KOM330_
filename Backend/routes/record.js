const express = require("express");
const router = express.Router()

const handler = require("../helper/handler")
const RecordController = require("../controller/record")

const { validateBody, schemas } = require("../validation/record")
const { auth } = require("../middleware")

router.post("/add", auth.checkToken, auth.isDiv, validateBody(schemas.inputRecord), handler.Catcher(RecordController.inputRecord));
router.get("/show", auth.checkToken, auth.isDiv, handler.Catcher(RecordController.showRecord));
router.get("/info", auth.checkToken, auth.isDiv, handler.Catcher(RecordController.showInfo));
router.get("/get/:dept", auth.checkToken, auth.isPst, handler.Catcher(RecordController.getDept));

module.exports = router;