module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { 
    timestamps: false,
    tableName: 'Categories',
  });
  return user;
};