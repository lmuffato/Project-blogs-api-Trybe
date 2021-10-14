module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

   // blog.associate = (models) => {
   // blog.belongsToMany(models.users, 
   //   { foreignKey: 'userId', as: 'users' });
  // };
  return blog;
};
