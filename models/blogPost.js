module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', { title: DataTypes.STRING,
      content: DataTypes.STRING,
  }, { createdAt: 'published', updatedAt: 'updated' });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
    BlogPost.hasMany(models.PostsCategories, {
      foreignKey: 'postId',
      as: 'categories',
    });
  };
  return BlogPost;
};
