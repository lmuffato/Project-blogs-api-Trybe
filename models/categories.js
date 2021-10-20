const Categories = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });
  return Category;
};

module.exports = Categories;