const { schemaCreateUser, schemaLogin } = require('../validations/validations');

const validationCreateUser = async (req, res, next) => {
  const { error } = schemaCreateUser.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

const validationLogin = async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

module.exports = {
  validationCreateUser,
  validationLogin,
}; 