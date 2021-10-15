const usersModel = require('../models/user');

    const nameValidation = async (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    next();
    };

    const emailValidation = async (req, res, next) => {
    const { email } = req.body;

    if (!email || email === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }

    const validEmail = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const compareEmail = email.match(validEmail);
    if (!compareEmail) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    next();
    };

    const emailExists = async (req, res, next) => {
    const { email } = req.body;

    const findEmail = await usersModel.findEmail(email);
    if (findEmail) return res.status(409).json({ message: 'Email already registered' });
    next();
    };

module.exports = {
    nameValidation,
    emailValidation,
    emailExists,
};