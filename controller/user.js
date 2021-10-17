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
    console.log(req.body);
   const token = await serviceUser.login(req.body);

   res.status(200).json({ token });
 },
);

const getAll = rescue(
  async (req, res) => {
    const { authorization } = req.headers;
   const users = await serviceUser.getAll(authorization);

   res.status(200).json(users);
 },
);

const findId = rescue(
  async (req, res) => {
    const { authorization } = req.headers;
    const { id } = req.params;
   const user = await serviceUser.findId(authorization, id);

   res.status(200).json(user);
 },
);

module.exports = {
  createUser,
  login,
  getAll,
  findId,
};
