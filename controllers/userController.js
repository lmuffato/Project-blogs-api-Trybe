const userService = require('../services/userService.js');

const status = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  SERVER_ERROR: 500,
};

const addNewUser = async (req, res) => {
  const { body: { displayName, email, password, image } } = req;
  const token = await userService.addNewUser(displayName, email, password, image);
  if (token.err) {
    return res.status(status[token.code]).json(token.err);
  }
  return res.status(status.CREATED).json({ token });
};

const requestLogin = async (req, res) => {
  const { body: { email, password } } = req;
  const token = await userService.requestLogin(email, password);
  if (token.err) {
    return res.status(status[token.code]).json(token.err);
  }
  return res.status(status.OK).json({ token });
};

module.exports = {
  addNewUser,
  requestLogin,
};
