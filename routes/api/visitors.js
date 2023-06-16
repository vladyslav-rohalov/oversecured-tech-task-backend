const express = require('express');
const ctrl = require('../../controllers/visitors');
const router = express.Router();
const { schemas } = require('../../models/visitor');
const validateBody = require('../../midlewares/validateBody');

router.get('/', ctrl.getAll);
router.post('/', validateBody(schemas.addSchema), ctrl.add);
module.exports = router;
