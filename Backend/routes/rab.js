const express = require("express");
const router = express.Router()

const handler = require("../helper/handler")
const RabController = require("../controller/rab")

const { validateBody, schemas } = require("../validation/rab")
const { auth } = require("../middleware")
const { makeMulter } = require('../service/multer')

router.post("/add", auth.checkToken, auth.isDiv, makeMulter('uploads/rab/').single('rabFile'), validateBody(schemas.inputRab), handler.Catcher(RabController.inputRab));
router.get("/show", auth.checkToken, auth.isDiv, handler.Catcher(RabController.showRab));
router.post("/check/:id", auth.checkToken, auth.isPst, validateBody(schemas.check), handler.Catcher(RabController.check));
router.get("/showAll", auth.checkToken, auth.isPst, handler.Catcher(RabController.showAllRab));
router.get("/download/:id", auth.checkToken, auth.isDiv, handler.Catcher(RabController.downloadRab));

module.exports = router;