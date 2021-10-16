const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'BlogPosts' });
  
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignkey: 'userId', as: 'user',
    });
  };

  return blogPosts;
};

module.exports = BlogPosts;
