const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false, tableName: 'PostsCategories' });

  postsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: postsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: postsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postsCategories;
};
  
module.exports = PostsCategories;
