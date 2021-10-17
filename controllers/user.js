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
      
      if (create.err) {
        return res.status(409).json(create.err);
      }
      return res.status(201).json(create);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = { createUser };