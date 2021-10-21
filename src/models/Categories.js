module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    },
  );

  return Categories;
};
