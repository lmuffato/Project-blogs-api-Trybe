module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { 
    timestamps: false,
    tableName: 'Categories',
  });
  
  return category;
};