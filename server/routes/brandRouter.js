const Router = require("express");
const router = new Router();
const BrandController = require("../conrtollers/brandController");
const checkRole = require("../middlewere/checkMiddleware");

router.post("/", checkRole("ADMIN"), BrandController.create);
router.post("/del", checkRole("ADMIN"), BrandController.delete);
router.get("/", BrandController.getAll);

module.exports = router;
