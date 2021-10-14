const ERROR = {
    message: '"name" is required',
};

const validateCategoryName = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json(ERROR);
    next();
};

module.exports = validateCategoryName;