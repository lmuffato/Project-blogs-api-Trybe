const rescue = require('express-rescue');
const { createUser } = require('../controllers/user');

const users = (app) => {
  app.route('/user')
    .post(rescue(createUser));
};

module.exports = users;