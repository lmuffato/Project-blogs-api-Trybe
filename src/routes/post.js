const rescue = require('express-rescue');
const { createPost, findAll } = require('../controllers/post');
const { validateToken } = require('../utils/token');

const posts = (app) => {
  app.route('/post')
    .get(validateToken, rescue(findAll))
    .post(validateToken, rescue(createPost));
};

module.exports = posts;
