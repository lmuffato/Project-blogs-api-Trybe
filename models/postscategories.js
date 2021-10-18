'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostsCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostsCategories.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostsCategories',
  });
  return PostsCategories;
};