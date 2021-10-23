const rescue = require('express-rescue');
const { createCategory, findAll } = require('../controllers/category');
const { validateToken } = require('../utils/token');

const users = (app) => {
  app.route('/categories')
    .post(validateToken, rescue(createCategory))
    .get(validateToken, rescue(findAll));
};

module.exports = users;
