const rescue = require('express-rescue');
const serviceUser = require('../service/user');

const createUser = rescue(
  async (req, res) => {
   const token = await serviceUser.createUser(req.body);

   res.status(201).json({ token });
 },
);

const login = rescue(
  async (req, res) => {
   const token = await serviceUser.login(req.body);

   res.status(200).json({ token });
 },
);

module.exports = {
  createUser,
  login,
};
