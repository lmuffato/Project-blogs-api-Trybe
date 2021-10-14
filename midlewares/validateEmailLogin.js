const EMAIL_REQUIRED = { message: '"email" is required' };
const EMAIL_EMPTY = { message: '"email" is not allowed to be empty' };

const validateEmailLogin = (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) return res.status(400).json(EMAIL_REQUIRED);  
    if (email.length === 0) return res.status(400).json(EMAIL_EMPTY);     
    next();
};

module.exports = validateEmailLogin;