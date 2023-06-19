const express = require('express');
const serverless = require('serverless-http');

const visitorsRouter = require('./routes/api/visitors');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/api/visitors', visitorsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports.handler = serverless(app);
