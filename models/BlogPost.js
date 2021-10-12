module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', 
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    createdAt: { type: DataTypes.DATE, field: 'published' },
    updatedAt: { type: DataTypes.DATE, field: 'updated' },
  },
  {
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'Users', foreignKey: 'userId' });
  };

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostsCategory, { as: 'PostsCategories', foreignKey: 'categoryId' });
  };

  return BlogPost;
};