const joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { BlogPost } = require('../models');
const util = require('../util');

const validateBlogPot = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.required(),
});

const jwtSecret = 'passwordNivelHard';

const createBlogPost =  async (date, token) => {
  if (!token) throw util('Token not found', 401);

  let userId;
  try {
    const { id } = jwt.verify(token, jwtSecret);
    userId = id;
  } catch (_err) {
    throw util('Expired or invalid token', 401);
  }

  const { title, content, categoryIds } = date;
  const { error } = validateBlogPot.validate({ title, content, categoryIds });

  if (error) {
    const { message } = error.details[0];
    throw util(message, 400);
  }
  console.log(userId);
  const published = new Date();
  const updated = new Date();
  try {
    const newBlogPost = await BlogPost.create({ title, content, userId, published, updated });
    console.log(newBlogPost);
    return newBlogPost;
  }catch(err){
    console.log(err.message);
    return (err) => ({ message: err.message });
  }
};

module.exports = {
  createBlogPost,
}
