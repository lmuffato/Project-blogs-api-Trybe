const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false });
  postsCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'post',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postsCategory;
};
module.exports = PostsCategory;