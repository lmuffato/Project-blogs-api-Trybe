const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  return PostsCategory;
};

module.exports = PostsCategories;
