module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', 
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };

  return BlogPosts;
};
