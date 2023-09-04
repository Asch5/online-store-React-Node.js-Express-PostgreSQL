const Router = require('express');
const router = new Router();
const DeviceController = require('../conrtollers/deviceController');
const checkRole = require('../middlewere/checkMiddleware');

router.post('/', checkRole('ADMIN'), DeviceController.create);
router.put('/', DeviceController.updateRating);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);

module.exports = router;
