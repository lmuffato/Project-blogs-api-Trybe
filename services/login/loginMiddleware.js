const { User } = require('../../models');

const verifyUserAndPassword = async (obj) => {
  const data = await User.findOne({ where: obj });
  if (!data || data === null || data === '') {
    throw new Error('Invalid fields');
  }
  return data;
};

const check = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const obj = { email, password };
    const data = await verifyUserAndPassword(obj);
    const { displayName, image } = data;
    req.userInfo = { displayName, email, image };
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = { check };
