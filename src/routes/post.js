const rescue = require('express-rescue');
const { createPost } = require('../controllers/post');
const { validateToken } = require('../utils/token');

const posts = (app) => {
  app.route('/post')
    .post(validateToken, rescue(createPost));
};

module.exports = posts;
