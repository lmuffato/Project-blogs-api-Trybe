const serviceUser = require('../service/user');
const rescue = require('express-rescue');

const createUser = rescue(
  async (req, res) => {
   const token = await serviceUser.createUser(req.body);

   res.status(201).json({ token });
 }
);

module.exports = {
  createUser,
};
