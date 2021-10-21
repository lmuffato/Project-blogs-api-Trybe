module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPosts' });
  };
  
  return User;
};