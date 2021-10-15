const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: new Date() },
    updated: { type: DataTypes.DATE, defaultValue: new Date() },

  },
  {
    timestamps: false,
});

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
  };

  return blogPost;
};

module.exports = BlogPost;
