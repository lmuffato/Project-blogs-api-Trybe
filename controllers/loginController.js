const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginService.login(email, password);
    
    console.log(user, 'controller');

    const payload = {
      user,
    };

    const token = jwt.sign(payload, secret);

    if (user.message) {
      return res.status(user.code).json({ message: user.message });
    }
    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { login };
