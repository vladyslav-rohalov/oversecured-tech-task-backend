const { Visitor } = require('../models/visitor');
const { v4: uuidv4 } = require('uuid');
const { ctrlWrapper } = require('../helpers');

const getAll = async (req, res) => {
  const result = await Visitor.scan().exec();
  res.json(result);
};

const add = async (req, res) => {
  const visitor = new Visitor({
    visitorID: uuidv4(),
    ...req.body,
  });
  await visitor.save();
  res.json(visitor);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
};
