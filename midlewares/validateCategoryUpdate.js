const ERROR = {
    message: 'Categories cannot be edited',
};

const validateCategoriesUpdate = (req, res, next) => {
    const { categoryIds } = req.body;
    if (categoryIds) return res.status(400).json(ERROR);
    next();
};

module.exports = validateCategoriesUpdate;