const { listAllUsers, saveUser, signIn, findUserById } = require('../services/user.service');
const { generateToken } = require('../security/auth');

async function listUsers(request, response) {
  try {
    const users = await listAllUsers();
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

async function findUser(request, response) {
  try {
    const user = await findUserById(request.params.id);
    return response.status(200).json(user);
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
}

async function createUser(request, response) {
  try {
    const { displayName, email, password, image } = request.body;
    await saveUser({ displayName, email, password, image });
    const token = generateToken(email, password);
    return response.status(201).json({ token });
  } catch (error) {
    return response.status(409).json({ message: error.message });
  }
}

async function login(request, response) {
  try {
    const { email, password } = request.body;
    await signIn(email, password);
    const token = generateToken(email, password);
    return response.status(200).json({ token });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
}

module.exports = { listUsers, findUser, createUser, login };