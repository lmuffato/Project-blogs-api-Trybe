const UserServices = require('../../services/user');
const { userValidation, emailFormatValidator } = require('../../middlewares/Users');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  userValidation(displayName, email, password, image);
  emailFormatValidator(email);
  
  const exists = await UserServices.findByEmail(email);

  if (exists) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  const newUser = await UserServices.createUser({ displayName, email, password, image });

  return res.status(201).json({
    token: newUser,
  });
};

module.exports = createUser;
