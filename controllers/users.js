const serviceUsers = require('../services/users');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await serviceUsers.create({
    displayName,
    email,
    password,
    image,
  });
  const body = response.token ? { token: response.token } : { message: response.message };

  // console.log('o service esta retornando isso: ', newUser);
  res.status(response.status).json(body);
};

module.exports = {
  create,
};
