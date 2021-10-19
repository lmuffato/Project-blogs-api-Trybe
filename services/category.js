const MESSAGE = require('../util/Message');
const { Category } = require('../models');

const createCategory = async (name) => {
    if (!name) return MESSAGE.categoryNameIsRequired;
    const category = await Category.create({ name });

    return { status: 201, message: category };
};

module.exports = { createCategory };