const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Categories', undescored: true });

  // Categories.associate = (models) => {
  //   Categories.hasMany(models.PostsCategories, {
  //     foreignkey: 'categoryId', as: 'postsCategories',
  //   });
  // };

  return categories;
};

module.exports = Categories;
