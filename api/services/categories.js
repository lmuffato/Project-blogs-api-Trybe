const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getCategories = async () => Category.findAll({ raw: true });

module.exports = { createCategory, getCategories };