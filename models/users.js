module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    id: { type: DataTypes.INTERGER, primaryKey: true },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    timestamp: false,
    tableName: 'Users',
    underscored: true,
 });

  Users.associate = (models) => {
    Users.hasMany(models.blogposts,
      { foreignKey: 'userId', as: 'user' });
};
  return Users;
};