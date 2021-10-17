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

async function getAll(req, res) {
  const { code, users } = await userService.getAll();
  
  res.status(code).json(users);
}

async function getById(req, res) {
  const { id: userId } = req.params;

  const { code, message, user } = await userService.getById(userId);

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json(user);
}

module.exports = {
  addUser,
  getAll,
  getById,
};