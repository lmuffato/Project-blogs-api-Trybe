const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(_models) {
      // define association here
    }
  }
  Category.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    underscored: true,
    timestamps: false,
  });
  return Category;
};