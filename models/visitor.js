const dynamoose = require('dynamoose');
const Joi = require('joi');

const tableName = 'Visitors';

const tableOptions = {
  throughput: 'ON_DEMAND',
};

const addSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const visitorsSchema = new dynamoose.Schema(
  {
    visitorID: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

const schemas = {
  addSchema,
};

const Visitor = dynamoose.model(tableName, visitorsSchema, tableOptions);

module.exports = {
  Visitor,
  schemas,
};
