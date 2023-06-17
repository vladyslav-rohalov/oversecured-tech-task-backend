const { Visitor } = require('../models/visitor');
const { v4: uuidv4 } = require('uuid');
const { ctrlWrapper, httpError } = require('../helpers');

const getAll = async (req, res) => {
  const { userID: ownerID } = req.user;
  const result = await Visitor.scan('ownerID').contains(ownerID).exec();
  res.json(result);
};

const add = async (req, res) => {
  const { userID: ownerID } = req.user;
  const visitor = new Visitor({
    visitorID: uuidv4(),
    ...req.body,
    ownerID,
  });
  await visitor.save();
  res.json(visitor);
};

const getById = async (req, res) => {
  const { userID: ownerID } = req.user;
  const { id } = req.params;
  const result = await Visitor.get(id);

  if (!result) {
    throw httpError(404, 'Not found');
  }

  if (result.ownerID !== ownerID) {
    throw httpError(403, 'Forbidden route');
  }

  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { userID: ownerID } = req.user;
  const { id } = req.params;
  const visitor = await Visitor.get(id);

  if (visitor.ownerID !== ownerID) {
    throw httpError(403, 'Forbidden route');
  }

  const result = await Visitor.update(id, req.body);

  if (!result) {
    throw httpError(404, 'Not found');
  }

  res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { userID: ownerID } = req.user;
  const { id } = req.params;
  const result = await Visitor.get(id);

  if (!result) {
    throw httpError(404, 'Not found');
  }

  if (result.ownerID !== ownerID) {
    throw httpError(403, 'Forbidden route');
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
