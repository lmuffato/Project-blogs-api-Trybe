const Joi = require('joi');
const rescue = require('express-rescue');
const validate = require('../middlewares/validate');
const CategoryService = require('../services/CategoryService');
const validateJWT = require('../middlewares/validate');

const createCategory = [
  validateJWT,
  validate(Joi.object({
    name: Joi.string().required(),
  })),
  rescue(async (req, res) => {
    const { name } = req.body;

    const newCategory = await CategoryService.createCategory({ name });

    return res.status(201).json(newCategory);
  }),
];

const getAllCategories = [
  validateJWT,
  rescue(async (_req, res) => {
    const categories = await CategoryService.getAllCategories();

    return res.status(200).json(categories);
  }),
];

module.exports = {
  createCategory,
  getAllCategories,
};