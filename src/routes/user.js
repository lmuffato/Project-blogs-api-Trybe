const rescue = require('express-rescue');
const { createUser, findAll, findById } = require('../controllers/user');
const { validateToken } = require('../utils/token');

const users = (app) => {
  app.route('/user')
    .post(rescue(createUser))
    .get(validateToken, rescue(findAll));
  app.route('/user/:id')
    .get(validateToken, rescue(findById));
};

module.exports = users;