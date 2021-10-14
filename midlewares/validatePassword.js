const PASSWORD_REQUIRED = {
    message: '"password" is required',
};

const PASSWORD_LENGTH = {
    message: '"password" length must be 6 characters long',
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) return res.status(400).json(PASSWORD_REQUIRED);
    if (password.length !== 6) return res.status(400).json(PASSWORD_LENGTH);
    next();
};

module.exports = validatePassword;