const CATEGORYEMPTY = {
    message: '"name" is required',
    code: 400,
};

const validateCategory = (category) => {
    if (!category) return CATEGORYEMPTY;
};

module.exports = {
    validateCategory,
};