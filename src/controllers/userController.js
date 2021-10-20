const userServices = require('../services/userServices');
// const errors = require('../error/errorCodes');

async function createUser(req, res, _next) {
  const { status, message, error } = await userServices.createUserServices(req.body);

  if (error) {
    return res.status(status).json({ message: error });
  }

  return res.status(status).json({ message });
}

const getAllUser = async (_req, res) => {
  const { status, data, message } = await userServices.getAllUser();

  if (message) {
    return res.status(status).json(message);
  }

  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUser,
};
