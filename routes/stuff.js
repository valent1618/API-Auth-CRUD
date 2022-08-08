const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const ctrl = require('../controllers/stuff');

router.post('/', auth, multer, ctrl.createStuff);
router.put('/:id', auth, multer, ctrl.modifyStuff);
router.delete('/:id', auth, ctrl.deleteStuff);
router.get('/:id', auth, ctrl.getOneStuff);
router.get('/', auth, ctrl.getAllStuff);

module.exports = router;
