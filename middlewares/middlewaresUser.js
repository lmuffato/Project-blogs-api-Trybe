const { Users } = require('../models');
const token = require('../services/tokenJwt');

const validateEmailAlreadyExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await Users.findOne({
        where: { email },
    });
    if (user) return res.status(409).json({ message: 'User already registered' });
    next();
};

const validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (email === '') {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }
    if (!email) return res.status(400).json({ message: '"email" is required' });
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = regex.test(String(email));
    if (!result) return res.status(400).json({ message: '"email" must be a valid email' });
  
    next();
};

const validateDisplayName = (req, res, next) => {
   const { displayName } = req.body;
   if (!displayName) return res.status(400).json({ message: '"displayName" is required' });
   if (displayName.length < 8) {
     return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' }); 
}
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (password === '') {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
    if (!password) return res.status(400).json({ message: '"password" is required' });
    if (password.length !== 6) {
       return res.status(400)
    .json({ message: '"password" length must be 6 characters long' }); 
}
   next();
};

const validateUserExists = async (req, res, next) => {
    const { password, email } = req.body;
    const user = await Users.findOne({
        where: { email, password },
    });
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    next();
};

const validateTokenFn = (req, res, next) => {
    const { authorization } = req.headers;
    const validateToken = token.validateToken(authorization);
    if (validateToken.status) {
        return res.status(validateToken.status).json({ message: validateToken.message });
    }
    next();
};

const verifyUserExistsById = async (req, res, next) => {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    next();
};

module.exports = {
    validateEmailAlreadyExists,
    validateEmail,
    validateDisplayName,
    validatePassword,
    validateUserExists,
    validateTokenFn,
    verifyUserExistsById,
};