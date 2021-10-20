const User = (sequelize, DataTypes) =>
  sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: { type: DataTypes.STRING, field: 'display_name' },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Users',
    },
  );

module.exports = User;
