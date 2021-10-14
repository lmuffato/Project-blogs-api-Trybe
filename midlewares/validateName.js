const INVALID_NAME = {
    message: '"displayName" length must be at least 8 characters long',
};

const validateName = (req, res, next) => {
    const { displayName } = req.body;
    if (!displayName || displayName.length < 8) return res.status(400).json(INVALID_NAME);
    next();
};

module.exports = validateName;