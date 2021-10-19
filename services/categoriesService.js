const { Category } = require('../models');
const categorySchema = require('../schemas/categoriesSchema');

const createCategory = async (category) => {
    const existCategory = await categorySchema.validateCategory(category);

    if (existCategory) return existCategory;

    const getCategory = await Category.create({ name: category });

    return getCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};