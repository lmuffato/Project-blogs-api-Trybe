const User = require('../Services/userService');
const { builtError } = require('../Services/heplers');

const addNew = async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    if (result.message) return next(result);

    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    next(builtError(500, 'Internal Error'));
  }
};

const login = async (req, res, next) => {
  try {
    const result = await User.login(req.body);
    if (result.message) return next(result);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(builtError(500, 'Internal Error'));
  }
};

const listAll = async (_req, res, next) => {
  try {
    const result = await User.listAll();
    if (result.message) return next(result);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(builtError(500, 'Internal Error'));
  }
};

const listById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.listById(id);
    if (result.message) return next(result);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(builtError(500, 'Internal Error'));
  }
};

module.exports = {
  addNew,
  login,
  listAll,
  listById,
};
