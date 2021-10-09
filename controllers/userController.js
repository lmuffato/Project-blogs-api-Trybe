const userService = require('../services/userService');
const { user } = require('../models/user');

const create = async (req, res) => {
  const data = req.body;
  const check = userService.check(data);
  if (check) return check;
  const { displayName, email, password, image } = data;

  const haveUser = await user.findAll({ email });

  if (haveUser) return res.status(400).json({ message: 'User already registered' });

  await user.create({ displayName, email, password, image });
  // const insertedProduct = await productModel.create(data);

  return res.status(200).json({ message: 'User already registered' });
};

module.exports = {
  create,
};
