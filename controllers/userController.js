const userService = require('../services/userService');

async function addUser(req, res) {
  const { displayName, email, password, image } = req.body;
  
  const { code, message, token } = await userService.addUser(
    { displayName, email, password, image },
  );

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json({ token });
} 

module.exports = {
  addUser,
};