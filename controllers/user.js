const express = require('express');
const rescue = require('express-rescue');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
const service = require('../services/User');

const createUser = rescue(async (req, res) => {
  try {
      const { displayName, email, password, image } = req.body;
      const create = await service.createUser({ displayName, email, password, image });
      console.log(create);
      
      if (create === 'exists') {
        return res.status(409).json({ message: 'User already registered' });
      }
      return res.status(201).json(create);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
});
const checkUser = rescue(async (req, res) => {
  try {
      const { email, password } = req.body;
      const checked = await service.checkUser({ email, password });
      
      if (checked === '!exists') {
        return res.status(400).json({ message: 'Invalid fields' });
      }
      return res.status(200).json(checked);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
});

/* const searchUser = rescue(async (req, res) => {
  try {
      const users = await service.searchUser();
      
      if (users === '!exist') {
        return res.status(400).json({ message: 'Usuario não encontrado' });
      }
      return res.status(200).json(users);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
}); */
const findAll = rescue(async (req, res) => {
  const users = await service.findAll();
  res.status(200).json(users);
});
const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await service.findById({ id });
  if (user === '!exist') {
    return res
      .status(404)
      .json({ message: 'User does not exist' });
  }
    res.status(200).json(user);
});
module.exports = { createUser, checkUser, findAll, findById };