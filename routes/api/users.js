const express = require('express');
const ctrl = require('../../controllers/users');
const router = express.Router();
const { schemas } = require('../../models/user');
const { authorization, validateBody } = require('../../midlewares/index');

router.post('/register', validateBody(schemas.authSchema), ctrl.register);
router.post('/login', validateBody(schemas.authSchema), ctrl.login);
router.get('/current', authorization, ctrl.getCurrent);
router.post('/logout', authorization, ctrl.logout);

module.exports = router;
