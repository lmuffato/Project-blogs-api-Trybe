const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.BlogPost, { as: 'BlogPosts', foreignKey: 'userId' });
    } 
  }
  User.init({
    displayName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true,
    timestamps: false,
  });
  return User;
};