module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, isEmail: true },
    password: { type: DataTypes.STRING, allowNull: false },
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    tableName: 'Users',
  });

  Users.associate = (models) => {
    Users.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'BlogPosts' });
  };

  return Users;
};