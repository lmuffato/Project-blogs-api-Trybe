const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Categories' });

  return categories;
};

module.exports = Categories;
