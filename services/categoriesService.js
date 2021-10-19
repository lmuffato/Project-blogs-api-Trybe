const { Category } = require('../models');
const categorySchema = require('../schemas/categoriesSchema');

const createCategory = async (category) => {
    const existCategory = await categorySchema.validateCategory(category);

    if (existCategory) return existCategory;

    const getCategory = await Category.create({ name: category });

    return getCategory;
};

module.exports = {
    createCategory,
};