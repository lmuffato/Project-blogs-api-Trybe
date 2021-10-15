const bodyParser = require('body-parser');
const user = require('./usersRoute');
const login = require('./loginRouter');

module.exports = (app) => {
  app.use(bodyParser.json());

  app.use(user);
  app.use(login);
};