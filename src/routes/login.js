const rescue = require('express-rescue');
const { userLogin } = require('../controllers/user');

const login = (app) => {
  app.route('/login')
    .post(rescue(userLogin));
};

module.exports = login;