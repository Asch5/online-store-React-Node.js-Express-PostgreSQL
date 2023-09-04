const Router = require("express");
const router = new Router();
const UserController = require("../conrtollers/userController");
const authMiddleware = require("../middlewere/authMiddleware");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", authMiddleware, UserController.check);

module.exports = router;
