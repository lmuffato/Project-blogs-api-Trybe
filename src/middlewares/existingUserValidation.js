const { User } = require('../models');

const existingUserValidation = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email } }); // sequelize dá um erro e diz pra colocar o where; https://sequelize.org/master/manual/model-querying-finders.html para o findOne
  if (existingUser !== null) {
    return res.status(409)
    .json({ message: 'User already registered' });
  }
  next();
};

const userNotFoundValidation = async (req, res, next) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email } }); // sequelize dá um erro e diz pra colocar o where; https://sequelize.org/master/manual/model-querying-finders.html para o findOne
  if (!existingUser) {
    return res.status(400)
    .json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  existingUserValidation,
  userNotFoundValidation,
};
