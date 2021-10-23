const { token } = require('../utils');
const { status: { OK } } = require('../utils');

const access = (email, password) => {
  const accessToken = token.create(email, password);
  return {
    status: OK,
    message: { token: accessToken },
  };
};

module.exports = access;
