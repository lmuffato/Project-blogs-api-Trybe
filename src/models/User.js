const {
  Model,
} = require('sequelize');

// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.BlogPost,
        { foreignKey: 'userId', association: 'blogPosts' });
    }
  }
  User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
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