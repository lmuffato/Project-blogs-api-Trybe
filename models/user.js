module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};