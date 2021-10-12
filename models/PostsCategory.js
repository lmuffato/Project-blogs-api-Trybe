module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'postsCategories',
  });
  return PostsCategory;
};