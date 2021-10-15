const { Category } = require('../models');

const NOT_FOUND = {
    message: '"categoryIds" not found',
};

const REQUIRED = {
    message: '"categoryIds" is required',
};

const validateCategoriesId = async (req, res, next) => {
    const { categoryIds } = req.body;
    console.log(req.body);
    console.log(categoryIds);
    if (categoryIds === undefined) return res.status(400).json(REQUIRED);
    const newArray = categoryIds.map(async (id) => Category.findByPk(id));
    const validation = await Promise.all(newArray)
    .then((resolvedValues) => resolvedValues.some((element) => element === null));
    console.log(validation);
    if (validation) return res.status(400).json(NOT_FOUND);
    next();
};

module.exports = validateCategoriesId;