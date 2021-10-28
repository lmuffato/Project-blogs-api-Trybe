module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Users',
    });

  User.associate = (models) => {
    User.hasMany(models.Post,
      { foreignKey: 'userId', as: 'BlogPosts' });
  };

  return User;
};