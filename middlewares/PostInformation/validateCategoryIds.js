const { Category } = require('../../models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({
      message: '"categoryIds" is required',
    });
  }

  const cats = await Promise.all(categoryIds.map((id) => Category.findOne({ where: { id } })));
  if (cats.some((category) => category === null)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};