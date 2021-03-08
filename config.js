const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  aws_access_key_id: process.env.aws_access_key_id,
  aws_secret_access_key: process.env.aws_secret_access_key,
  PORT: process.env.PORT,
  API_KEY:process.env.API_KEY,
  AWS_PREFIX:process.env.AWS_PREFIX
};