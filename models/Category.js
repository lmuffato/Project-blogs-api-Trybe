module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
  {
    name: DataTypes.STRING,
  },
  {
    timestamp: false,
    tableName: 'Categories',
  });
  return Category;
}; 