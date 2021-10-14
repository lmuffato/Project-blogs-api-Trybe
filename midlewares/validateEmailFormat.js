const INVALID_EMAIL = {
    message: '"email" must be a valid email',
};
const EMAIL_NOT_PRESENT = {
    message: '"email" is required',
};

const validateEmailFormat = (req, res, next) => {
    const { email } = req.body;    
    if (!email) return res.status(400).json(EMAIL_NOT_PRESENT);
    if (!email.includes('@') || !email.endsWith('.com')) return res.status(400).json(INVALID_EMAIL);
    const validationString = email.split('@')[0];
    if (validationString.length === 0) return res.status(400).json(INVALID_EMAIL);
    next();
};

module.exports = validateEmailFormat;