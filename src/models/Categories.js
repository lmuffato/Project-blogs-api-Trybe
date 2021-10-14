const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Categories', undescored: true });

  return categories;
};

module.exports = Categories;
