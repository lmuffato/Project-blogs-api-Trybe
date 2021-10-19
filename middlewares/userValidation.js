const { Users } = require('../models');

function validPassword(req, res, next) {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
}

function validEmail(req, res, next) {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!regex.test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
}

function validDisplayName(req, res, next) {
  const { displayName } = req.body;
  if (displayName.length < 8) {
  return res.status(400).json({ 
    message: '"displayName" length must be at least 8 characters long',
  });
  } 
  next();
}

 async function resgisteredEmail(req, res, next) {
  const { email } = req.body;
  const userAlredyExist = await Users.findOne({ where: { email } });
  if (userAlredyExist) return res.status(409).json({ message: 'User already registered' });
  next();
}

async function validUserId(req, res, next) {
  const { id } = req.params;
  const findUserId = await Users.findOne({ where: { id } });
  if (!findUserId) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next();
}

module.exports = {
   validUserId, 
   validEmail, 
   validPassword, 
   validDisplayName, 
   resgisteredEmail,
  };