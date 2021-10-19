 const { Category } = require('../models');

const TITLEFIELD = {
    message: '"title" is required',
    code: 400,
};

const CONTENTFIELD = {
    message: '"content" is required',
    code: 400,
};

const CATEGORYIDFIELD = {
    message: '"categoryIds" is required',
    code: 400,
};

const CATEGORYIDDOESNTEXIST = {
    message: '"categoryIds" not found',
    code: 400,
};

const validateTitle = (title) => {
    if (!title) return TITLEFIELD;
};

const validateContent = (content) => {
    if (!content) return CONTENTFIELD;
};

const validateCategoryId = async (categoryIds) => {
    if (!categoryIds) return CATEGORYIDFIELD;

    const existCategoryId = await Category.findAll({ 
        where: { id: categoryIds },
    });

    if (existCategoryId.length !== categoryIds.length) return CATEGORYIDDOESNTEXIST;
};

module.exports = {
    validateTitle,
    validateContent,
    validateCategoryId,
};