module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    name: DataTypes.STRING,
  }, { 
    timestamps: false,
    tableName: 'PostsCategories',
  });
  return postCategory;
};