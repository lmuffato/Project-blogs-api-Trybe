const { Category } = require('../models');
const { Categories } = require('../middleware/schema');

const createCategories = async (data) => {
    const { error } = Categories.validate(data);
    if (error) return { status: 400, message: error.details[0].message };

    const category = await Category.create(data);

    return { status: 201, data: category };
};

module.exports = { createCategories };
