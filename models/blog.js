module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

   blogPosts.associate = (models) => {
     blogPosts.belongsTo(models.Users, 
      { foreignKey: 'userId', as: 'user' });
   };
  return blogPosts;
};
