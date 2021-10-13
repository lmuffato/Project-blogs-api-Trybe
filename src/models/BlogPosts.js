const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, { timestamps: false, tableName: 'BlogPosts', undescored: true });
  
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foriegnkey: 'userId', as: 'user',
    });
  };

  return blogPosts;
};

module.exports = BlogPosts;
