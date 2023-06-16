const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { ctrlWrapper, httpError } = require('../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const isTwin = await User.scan('email').contains(email).exec();
  if (isTwin) {
    throw httpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = new User({
    userID: uuidv4(),
    email,
    password: hashPassword,
    token: '',
  });
  await user.save();

  res.status(201).json({
    user: {
      email: user.email,
    },
  });
};

const getCurrent = async (req, res) => {
  const result = await User.scan().exec();
  res.json(result);
};

module.exports = {
  register: ctrlWrapper(register),
  getCurrent: ctrlWrapper(getCurrent),
};
