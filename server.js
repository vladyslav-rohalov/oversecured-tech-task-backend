const app = require('./app');
const dynamoose = require('dynamoose');

const {
  PORT = 3000,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  REGION,
} = process.env;

const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: REGION,
});

dynamoose.aws.ddb.set(ddb);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
