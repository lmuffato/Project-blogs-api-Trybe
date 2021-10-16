const services = require('../services');
const { CREATED_STATUS } = require('../utils/httpStatus');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await services.createUser(displayName, email, password, image);
  return res.status(CREATED_STATUS).json({ displayName, email, image });
};