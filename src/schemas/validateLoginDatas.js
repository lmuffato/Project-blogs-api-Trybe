const yup = require('yup');

const loginSchema = yup.object().shape({
  email: yup.string().min(1, '"email" is not allowed to be empty')
  .required('"email" is required'),
  password: yup.string().min(6, '"password" is not allowed to be empty')
  .required('"password" is required'),
});

module.exports = { loginSchema };