const { BlogPost } = require('../models');
const httpStatus = require('../utils/httpStatus');
const { userByEmail } = require('./usersController');
const { verify } = require('../middlewares/validateJWT');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const payload = verify(authorization);
  const userEmail = payload.email;

  const user = await userByEmail(userEmail);

  console.log(`user: ${user}`);

  const userId = user.id;

  console.log(`userId: ${userId}`);
  
  const category = await BlogPost.create({ title,
    content,
    categoryIds,
    userId,
    published: new Date(),
    updated: new Date() });

  console.log(`category: ${category}`);

  const { id } = category;
  const post = { id, userId, title, content };
  
  res.status(httpStatus.created).json(post);
};

// const getAllCategories = async (_req, res) => {
//   const allCategories = await Category.findAll();
//   res.status(200).json(allCategories);
// };

module.exports = {
  createPost,
  // getAllCategories,
};
