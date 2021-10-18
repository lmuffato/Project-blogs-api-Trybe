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

module.exports = { createUser, checkUser };