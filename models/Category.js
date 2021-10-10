module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
  {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  },
  {
    timestamp: false,
  });
  return Category;
};