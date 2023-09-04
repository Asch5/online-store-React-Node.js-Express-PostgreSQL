const Router = require('express');
const router = new Router();
const RatingController = require('../conrtollers/ratingController');
const checkRole = require('../middlewere/checkMiddleware');

//router.post("/", checkRole("ADMIN"), DeviceController.create);
router.post('/', RatingController.create);
router.get('/', RatingController.getAll);
//router.get("/:id", DeviceController.getOne);

module.exports = router;
