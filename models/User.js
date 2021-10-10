module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
  {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamp: false,
  });
  return User;
};