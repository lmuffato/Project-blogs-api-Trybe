function createUser(request, response) {
  response.status(201).json({ message: 'test' });
}

module.exports = { createUser };