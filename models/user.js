const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User',
    {
      displayName: DataTypes.STRING,
      emal: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Users',
    });
    user.associate = (models) => {
      user.hasMany(models.blogPost, {
        foreignKey: 'user_id', as: 'blogposts',
      });
    };
  return user;
};

module.exports = User;