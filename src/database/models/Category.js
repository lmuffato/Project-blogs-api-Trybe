module.exports = (sequelize, DataTypes) => {
  const CategorySchema = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };
  const Category = sequelize.define('Category', CategorySchema, { timestamps: false });

  return Category;
};