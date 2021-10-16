const database = require('../models');
const { createToken } = require('../middlewares/createToken');

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await database.Users.findOne({ where: { email, password } });
  const user2 = await database.Users.findAll();
  console.log(user2);
  console.log(user);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  const token = createToken(user.id, user.displayName, email, user.image);
  return res.status(200).json({ token });
};

module.exports = login;