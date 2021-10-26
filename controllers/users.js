const serviceUsers = require('../services/users');

const create = async (req, res) => {
  try {
    const { displayNmae, email, password, image } = req.body;
    const token = await serviceUsers.create({
      displayNmae,
      email,
      password,
      image,
    });

    // console.log('o service esta retornando isso: ', newUser);
    res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
