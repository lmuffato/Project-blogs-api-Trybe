const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  return PostsCategory;
};

module.exports = PostsCategories;
