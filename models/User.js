const User = (sequelize, DataTypes) => {
  const user = {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    id: DataTypes.INTEGER,
  };
  return user;
};

module.exports = User;