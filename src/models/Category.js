const Category = (sequelize, DataTypes) =>
  sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Categories',
    },
  );

module.exports = Category;
