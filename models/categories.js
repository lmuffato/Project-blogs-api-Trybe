module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    tableName: 'Categories',
  });
  return Categories;
};