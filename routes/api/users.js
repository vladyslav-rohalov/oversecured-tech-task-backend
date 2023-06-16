const express = require('express');
const ctrl = require('../../controllers/users');
const router = express.Router();
const { schemas } = require('../../models/user');
const validateBody = require('../../midlewares/validateBody');

router.post('/register', ctrl.register);
router.get('/current', ctrl.getCurrent);

module.exports = router;
