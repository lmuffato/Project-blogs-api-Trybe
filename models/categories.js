module.exports = (sequelize, DataTypes) => {
  const definedCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return definedCategory;
};