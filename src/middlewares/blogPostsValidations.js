const { Category } = require('../models');

const blogPostsValidations = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title) return res.status(400).json({ message: '"title" is required' });

    if (!content) return res.status(400).json({ message: '"content" is required' });

    if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });

    const isIdExists = await Category.findOne({ where: { id: categoryIds[0] } });
    if (!isIdExists) return res.status(400).json({ message: '"categoryIds" not found' });

    next();
};

module.exports = { blogPostsValidations };
