const Category = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return CategoryModel;
};

module.exports = Category;