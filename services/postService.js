const { BlogPost, Category, User } = require('../models');

async function findPost() {
  const post = await BlogPost.findAll({ 
    include: [ 
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
     ],
   });
  return { status: 200, data: post };
}

module.exports = { findPost };