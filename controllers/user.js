const userService = require('../services/users');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const userCreated = await userService.createUser(displayName, email, password, image);
    return res.status(201).json({ token: userCreated });
  } catch (_err) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

const loginUser = async (req, res) => {
  const { email } = req.body;
  const logedUser = await userService.loginUser(email);
  return res.status(200).json({ token: logedUser });
};

const getUsers = async (req, res) => {
    const token = req.headers.authorization;
    const getUsersAll = await userService.getUsers(token);
    if (getUsersAll.errorCode) {
   return res.status(getUsersAll.errorCode)
    .json(getUsersAll.errorInfo); 
  }
    return res.status(200).json(getUsersAll);  
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
};