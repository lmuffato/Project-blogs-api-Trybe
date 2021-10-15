const { User } = require('../models');
const httpStatus = require('../utils/httpStatus');
const errorCodes = require('../utils/errorCodes');
const generateToken = require('../token/generateToken');

const create = async (req, res) => {
  const { displayName, password, email, image } = req.body;
  const userInfo = { password, email };

  const token = generateToken(userInfo);

  const newUser = await User.create({ displayName, password, email, image })
    .then(() => {
      res.status(httpStatus.HTTP_CREATE_STATUS).json({ token });
    }).catch(() => {
      res.status(httpStatus.CONFLICT_STATUS).json(errorCodes.errorUserExists);
    });
  return newUser;
};

module.exports = {
  create,
};
