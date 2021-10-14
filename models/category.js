module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return Category;
};