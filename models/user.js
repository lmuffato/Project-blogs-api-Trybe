module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'Users',
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { as: 'blogposts', foreignKey: 'id' });
  };

  return User;
};