const rescue = require('express-rescue');
const { createCategory } = require('../controllers/category');
const { validateToken } = require('../utils/token');

const users = (app) => {
  app.route('/categories')
    .post(validateToken, rescue(createCategory));
};

module.exports = users;