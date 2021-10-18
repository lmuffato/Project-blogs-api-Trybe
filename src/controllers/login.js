const { User } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { status } = getStatusCode('ok');

    validation.verifyEmail(email);
    validation.verifyPassword(password);

    const token = validation.getToken(email);

    const user = await User.findOne({ where: { email } });
    validation.isConditionValid(user, 'badRequest', 'Invalid fields');

    res.status(status).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};
