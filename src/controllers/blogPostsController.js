const { BlogPost, User } = require('../models');
require('dotenv').config();

const create = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;
  
  const { id } = await User.findOne({ where: { email } });
  // console.log(id);

  const newPost = await BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });

  return res.status(201).json(newPost);
};

module.exports = {
  create,
};
