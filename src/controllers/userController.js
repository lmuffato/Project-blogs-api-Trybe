const userService = require('../services/userService');

module.exports = {
  async create(req, res) {
    const { displayName, email, password, image } = req.body;

    const response = await userService.createUser(
      displayName,
      email,
      password,
      image,
    );

    return res
      .status(response.status)
      .json(
        response.token
          ? { token: response.token }
          : { message: response.message },
      );
  },

  async index(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    if (id) {
      const response = await userService.getUser(token, id);

      return res
        .status(response.status)
        .json(response.user ? response.user : { message: response.message });
    }

    const response = await userService.getAllUsers(token);

    return res
      .status(response.status)
      .json(response.users ? response.users : { message: response.message });
  },

  async delete(req, res) {
    const token = req.headers.authorization;

    const response = await userService.deleteUser(token);

    return res
      .status(response.status)
      .json(response.message && { message: response.message });
  },
};
