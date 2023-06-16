const { Visitor } = require('../models/visitor');
const { v4: uuidv4 } = require('uuid');
const { ctrlWrapper, httpError } = require('../helpers');

const getAll = async (req, res) => {
  console.log(req);
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

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.get(id, {
    attributes: ['visitorID', 'firstName', 'lastName'],
  });
  if (!result) {
    throw httpError(404, 'Not found');
  }
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.update(id, req.body);
  if (!result) {
    throw httpError(404, 'Not found');
  }
  res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.get(id);
  if (!result) {
    throw httpError(404, 'Not found');
  }
  await result.delete();
  res.status(200).json({ message: 'Delete success' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getById: ctrlWrapper(getById),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
