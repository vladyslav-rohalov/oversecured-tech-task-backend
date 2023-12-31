const dynamoose = require('dynamoose');
const Joi = require('joi');

const tableName = 'Visitors';

const tableOptions = {
  throughput: 'ON_DEMAND',
};

const visitorSchema = new dynamoose.Schema(
  {
    visitorID: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    ownerID: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const addSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Visitor = dynamoose.model(tableName, visitorSchema, tableOptions);

module.exports = {
  Visitor,
  schemas,
};
