const express = require('express');
const ctrl = require('../../controllers/visitors');
const router = express.Router();
const { schemas } = require('../../models/visitor');
const { validateBody, authorization } = require('../../midlewares/index');

router.get('/', authorization, ctrl.getAll);

router.get('/:id', authorization, ctrl.getById);

router.post('/', authorization, validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:id',
  authorization,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete('/:id', authorization, ctrl.deleteById);

module.exports = router;
