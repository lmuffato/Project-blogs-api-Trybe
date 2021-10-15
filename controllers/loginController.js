const database = require('../models');
const createToken = require('../middlewares/createToken');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await database.user.findOne({ where: { email, password } });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  const token = createToken(user.id, user.displayName, email, user.image);
  return res.status(200).json({ token });
};

module.exports = login;