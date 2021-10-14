const UserServices = require('../../services/user');
const UserSchema = require('../../schemas/user');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userExists = await UserSchema.userEmailExists(email);

  if (userExists.message) {
    return res
      .status(userExists.status).json({ message: userExists.message }); 
  }

  const createdUser = await UserServices.createUser({ displayName, email, password, image });

  if (createdUser.message) {
 return res
  .status(createdUser.status).json({ message: createdUser.message }); 
}

  res.status(201).json(createdUser);
};