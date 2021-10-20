const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false, tableName: 'PostsCategories' });

  postsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: postsCategories,
      foreignkey: 'categoryId',
      otherkey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: postsCategories,
      foreignkey: 'postId',
      otherkey: 'categoryId',
    });
  };

  return postsCategories;
};
  
module.exports = PostsCategories;
