const rescue = require('express-rescue');
const { createUser, findAll } = require('../controllers/user');
const { validateToken } = require('../utils/token');

const users = (app) => {
  app.route('/user')
    .post(rescue(createUser))
    .get(validateToken, rescue(findAll));
};

module.exports = users;