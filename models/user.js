module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
    });
  };
  return User;
};