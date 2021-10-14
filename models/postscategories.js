module.exports = (sequelize, DataTypes) => {
 const PostsCategories = sequelize.define('PostsCategories', {
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
 });
  return PostsCategories;
};