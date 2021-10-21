const PostCategory = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostsCategory', {},
   { timestamps: false, tablename: 'PostsCategories' });
  
  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: postCategory,
      foreignKey: 'categoryId', // é preciso linkar as 2 tabelas por isso pega a infos da associate acima.
      otherKey: 'postId', // id do BlogPosts
    });
  };
  return postCategory;
};

module.exports = PostCategory;