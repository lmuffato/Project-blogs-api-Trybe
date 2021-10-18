const userServices = require('../services/userServices');
// const errors = require('../error/errorCodes');

async function createUser(req, res, _next) {
  const { status, message, error } = await userServices.createUserServices(req.body);

  if (error) {
    return res.status(status).json({ message: error });
  }

  return res.status(status).json({ message });
}

module.exports = {
  createUser,
};
