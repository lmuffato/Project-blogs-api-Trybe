const serviceUsers = require('../services/users');

const create = async (req, res) => {
  try {
    const { displayNmae, email, password, image } = req.body;
    const newUser = await serviceUsers.create({
      displayNmae,
      email,
      password,
      image,
    });

    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
