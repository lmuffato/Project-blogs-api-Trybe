module.exports = (sequelize, DataTypes) => {
  const definedBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, 
    userId: DataTypes.STRING,
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
