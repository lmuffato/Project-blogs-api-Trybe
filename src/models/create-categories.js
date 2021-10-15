module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
  });

  return category;
}; 
