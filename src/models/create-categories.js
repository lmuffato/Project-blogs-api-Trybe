'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create - categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  create - categories.init({
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'create-categories',
  });
  return create - categories;
};