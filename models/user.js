'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};