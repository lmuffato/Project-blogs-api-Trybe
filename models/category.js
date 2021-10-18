module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
  });
  Category.associate = (models) => {
    Category.hasMany(models.PostsCategories, {
      foreignKey: 'categoryId',
      as: 'postId',
    });
  };
  return Category;
};
