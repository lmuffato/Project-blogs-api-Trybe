const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(_models) {}
  }
  Category.init({
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    timestamps: false,
  });
  return Category;
};
