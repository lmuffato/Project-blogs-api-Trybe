const { Category } = require('../models');
require('dotenv').config();

const getAll = async (req, res) => {
  // const { userInfo } = req.user;
  // console.log(userInfo);
  const categories = await Category.findAll();
  return res.status(200).json(categories);
};

const create = async (req, res) => {
  const { name } = req.body;

  const createdCategory = await Category.create({ name });
  
  return res.status(201).json(createdCategory);
};

module.exports = {
  create,
  getAll,
};
