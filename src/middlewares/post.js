const { status, message } = require('../messages');
const { verify } = require('../auth/jwtFunctions');
const { postServices } = require('../services');

const existToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(status.unauthorized).json({ message: message.tokenEmpty });
  }

  next();
};

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const getIdUser = verify(token);
    req.user = getIdUser;
  } catch (e) {
    if (e) {
    return res
      .status(status.unauthorized)
      .json({ message: message.tokenInvalid });
    }
  }

  next();
};

const checkCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
 
  if (!categoryIds) {
    return res.status(status.badRequest).json({ message: message.categoryidEmpty });
  }

  next();
};

const checkExistCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const registeredCaterory = await postServices.searchCategory(categoryIds);

    if (!registeredCaterory) {
      return res.status(status.badRequest).json({ message: message.categoryIdNotFound });
    }
  
  next();
};

const checkTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(status.badRequest).json({ message: message.titleEmpty });
  }

  next();
};

const checkContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(status.badRequest).json({ message: message.contentEmpty });
  }

  next();
};

const checkPostExist = async (req, res, next) => {
  const { id } = req.params; 
  const existPost = await postServices.getPost(id);

  if (!existPost) {
    return res.status(status.notFound).json({ message: message.postEmpty });
  }

  next();
};

// const checkCategory = (req, res, next) => {
//   const { categoryIds } req.
// }

const validatePost = [
  existToken,
  checkToken,
  checkCategory,
  checkExistCategory,
  checkTitle,
  checkContent,
];

const validateToken = [
  existToken,
  checkToken,
];

const validateListPost = [
  existToken,
  checkToken,
  checkPostExist,
];

const validateUpdate = [
  existToken,
  checkToken,
];

module.exports = {
  validatePost,
  validateToken,
  validateListPost,
  validateUpdate,
};
