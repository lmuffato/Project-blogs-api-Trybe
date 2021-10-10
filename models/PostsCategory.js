module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamp: false,
  });
  return PostsCategory;
};