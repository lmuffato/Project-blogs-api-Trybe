const bodyParser = require('body-parser');
const user = require('./usersRoute');
const login = require('./loginRouter');
const category = require('./categoriesRouter');

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(user);
  app.use(login);
  app.use(category);
};