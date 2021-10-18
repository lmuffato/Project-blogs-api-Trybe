module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
    underscored: true,
  });

  return Categories;
};
