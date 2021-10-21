module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: { type: DataTypes.STRING, field: 'display_name' },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, { foreignKey: 'userId' });
  };

  return Users;
};
