const express = require('express');
const ctrl = require('../../controllers/visitors');
const router = express.Router();
const { schemas } = require('../../models/visitor');
const validateBody = require('../../midlewares/validateBody');

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateById);

router.delete('/:id', ctrl.deleteById);

module.exports = router;
