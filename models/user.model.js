const User = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'Users',
      timestamps: false,
    });
  return userTable;
};

module.exports = User;