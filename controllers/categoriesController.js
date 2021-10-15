const { Category } = require('../models');
// const errorMessages = require('../utils/errorMessages');
const httpStatus = require('../utils/httpStatus');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  
  res.status(httpStatus.created).json(category);
};

// const getAllUsers = async (_req, res) => {
//   const allUsers = await User.findAll();
//   res.status(200).json(allUsers);
// };

// const getUserById = async (req, res) => {
//   const userId = req.params.id;
//   const userById = await User.findOne({ where: { id: userId } });

//   res.status(httpStatus.ok).json(userById);
// };

module.exports = {
  createCategory,
};
