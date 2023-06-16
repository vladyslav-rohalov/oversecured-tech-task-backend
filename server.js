const app = require('./app');
const dynamoose = require('dynamoose');

const {
  PORT = 3000,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  REGION,
  // ENDPOINT,
} = process.env;

const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: REGION,
  // endpoint: ENDPOINT,
});

dynamoose.aws.ddb.set(ddb);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
