const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const logIn = rescue(async (req, res) => {
    const { email, password } = req.body;

    const login = await loginService.logIn(email, password);

    if (login.message) return res.status(login.code).json({ message: login.message });

    return res.status(200).json({ token: login.token });
});

module.exports = {
    logIn,
};