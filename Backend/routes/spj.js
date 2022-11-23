const express = require("express");
const router = express.Router()

const handler = require("../helper/handler")
const SpjController = require("../controller/spj")

const { validateBody, schemas } = require("../validation/spj")
const { auth } = require("../middleware")
const { makeMulter } = require('../service/multer')

router.post("/add", auth.checkToken, auth.isDiv, makeMulter('uploads/spj/').single('spjFile'), validateBody(schemas.inputSpj), handler.Catcher(SpjController.inputSpj));
router.get("/show", auth.checkToken, auth.isDiv, handler.Catcher(SpjController.showSpj));
router.post("/check/:id", auth.checkToken, auth.isPst, validateBody(schemas.check), handler.Catcher(SpjController.check));
router.get("/showAll", auth.checkToken, auth.isPst, handler.Catcher(SpjController.showAllSpj));

module.exports = router;