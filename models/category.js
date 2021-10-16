module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
  });
  // Category.associate = (models) => {
  //   Category.hasMany(models.PostsCategory, {
  //     foreignKey: 'categoryId',
  //   });
  // };
  return Category;
};
