const dynamoose = require('dynamoose');
const Joi = require('joi');

const tableName = 'Users';

const tableOptions = {
  throughput: 'ON_DEMAND',
};

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new dynamoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const authSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  authSchema,
};

const User = dynamoose.model(tableName, userSchema, tableOptions);

module.exports = {
  User,
  schemas,
};
