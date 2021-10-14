const PASSWORD_REQUIRED = { message: '"password" is required' };
const PASSWORD_EMPTY = { message: '"password" is not allowed to be empty' };

const validatePasswordLogin = (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) return res.status(400).json(PASSWORD_REQUIRED);
    if (password.length === 0) return res.status(400).json(PASSWORD_EMPTY);
    next();
};

module.exports = validatePasswordLogin;