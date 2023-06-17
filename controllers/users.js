const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { ctrlWrapper, httpError } = require('../helpers');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const isTwin = await User.scan('email').contains(email).exec();
  if (isTwin.count !== 0) {
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

const login = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await User.scan('email').contains(email).exec();

  if (!user) {
    throw httpError(401, 'Email or password is wrong');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw httpError(401, 'Email or password is wrong');
  }

  const payload = {
    id: user.userID,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await User.update(user.userID, { token });

  res.status(200).json({
    token: token,
    user: {
      email: user.email,
      name: user.name,
    },
  });
};

const getCurrent = async (req, res) => {
  const { email } = req.user;
  res.json({ email });
};

const logout = async (req, res) => {
  const { userID } = req.user;
  await User.update(userID, { token: '' });

  res.status(204).json();
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
