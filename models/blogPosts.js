module.exports = (sequelize, DataTypes) => {
  const definedBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  definedBlogPost.associate = (models) => {
    definedBlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return definedBlogPost;
};
