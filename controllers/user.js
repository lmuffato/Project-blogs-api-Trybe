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

const getUserByEmail = async (email) => {
  const soughtuser = await User.findOne({ where: { email } });
  return soughtuser;
};

const getAll = async (_req, res) => User.findAll(
  { attributes: ['id', 'displayName', 'email', 'image'] },
).then((allUsers) => res.status(httpStatus.HTTP_OK_STATUS).json(allUsers))
.catch((error) => {
  console.log(error);
  res.status(httpStatus.HTTP_NOT_FOUND).json(error);
});

const findById = async (req, res) => {
  const userId = req.params.id;

  const findUser = await User.findByPk(userId).then((soughtUser) => {
    const { id, displayName, email, image } = soughtUser;
    res.status(httpStatus.HTTP_OK_STATUS).json({ id, displayName, email, image });
  }).catch((_err) => res.status(httpStatus.HTTP_NOT_FOUND).json(errorCodes.errorUserNotFound));

  return findUser;
};

module.exports = {
  create,
  getUserByEmail,
  getAll,
  findById,
};
