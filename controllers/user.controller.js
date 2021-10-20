const { saveUser } = require('../services/user.service');
const { generateToken } = require('../security/auth');

async function createUser(request, response) {
  try {
    const { displayName, email, password, image } = request.body;
    await saveUser({ displayName, email, password, image });
    const token = generateToken(email, password);
    response.status(201).json({ token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}

module.exports = { createUser };