module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: { type: DataTypes.INTERGER, primaryKey: true },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    timestamp: false,
    tableName: 'Categories',
    underscored: true,
 });

  return categories;
};
