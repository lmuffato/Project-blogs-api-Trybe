module.exports = (Sequelize, DataTypes) => {
  const blogPost = Sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return blogPost;
};