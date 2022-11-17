const { Router } = require("express")
const router = Router()
const handler = require("../helper/handler")
const AuthController = require("../controller/auth")
const { validateBody, schemas } = require("../validation/auth")
const { auth } = require("../middleware")

router.post(
  "/registration",
  validateBody(schemas.userRegistration),
  handler.Catcher(AuthController.userRegistration)
)
router.post("/login", validateBody(schemas.userLogin), handler.Catcher(AuthController.userLogin))
router.get("/email/verify", handler.Catcher(AuthController.verifyEmail))

module.exports = router