const { Users } = require('../models');

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
    if (!password) return res.status(400).json({ message: '"password" is required' });
    if (password.length !== 6) {
       return res.status(400)
    .json({ message: '"password" length must be 6 characters long'}); 
}
   next();
};

module.exports = {
    validateEmailAlreadyExists,
    validateEmail,
    validateDisplayName,
    validatePassword,
};