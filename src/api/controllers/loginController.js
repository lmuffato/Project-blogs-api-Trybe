const {
  HTTP_SERVER_ERROR,
} = require('../status');

const { loginServices } = require('../services/loginServices');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { notFound, code, message, found, token } = await loginServices({ email, password });

    if (notFound) return res.status(code).json({ message });

    if (found) return res.status(code).json({ token });
  } catch (e) {
    return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = { loginController };