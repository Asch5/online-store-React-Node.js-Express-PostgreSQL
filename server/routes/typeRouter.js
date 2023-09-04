const Router = require("express");
const router = new Router();
const TypeController = require("../conrtollers/typeController");
const checkRole = require("../middlewere/checkMiddleware");

router.post("/", checkRole("ADMIN"), TypeController.create);
router.get("/", TypeController.getAll);

module.exports = router;
