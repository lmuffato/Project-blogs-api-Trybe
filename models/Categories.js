module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
 });

  return Category;
};
