const MESSAGE = require('../util/Message');
const { Category } = require('../models');

const createCategory = async (name) => {
    if (!name) return MESSAGE.categoryNameIsRequired;
    const category = await Category.create({ name });
    return { status: 201, message: category };
};

const getCategories = async () => {
    const category = await Category.findAll();
    return { status: 200, message: category };
};

module.exports = { createCategory, getCategories };