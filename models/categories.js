module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
    {
      tableName: 'Categories',
      timestamps: false,
    },
  );

  return Categories;
};