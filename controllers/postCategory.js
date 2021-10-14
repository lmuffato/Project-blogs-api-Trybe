const { Category } = require('../models');

const postCategory = async (req, res) => {
    const { name } = req.body;
    const oldOne = await Category.findOne({ where: { name } });
    if (oldOne) return res.status(401).json({ message: 'category already exists' });
    const newOne = await Category.create({ name });
    return res.status(201).json(newOne);
};

module.exports = postCategory;