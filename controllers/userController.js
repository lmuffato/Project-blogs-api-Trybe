const userServices = require('../services/userServices');

const createUser = async (request, response) => {
  const user = await userServices.createUser(request.body);
  if (user === 'exist') {
    return response.status(409).json({ message: 'User already registered' });
  }
  
  return response.status(201).json(user);
};

module.exports = {
  createUser,
};
