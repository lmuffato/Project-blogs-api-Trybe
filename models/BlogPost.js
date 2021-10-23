module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', 
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  {
    tableName: 'blogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'Users', foreignKey: 'userId' });
  };

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostsCategory, { as: 'PostsCategories', foreignKey: 'categoryId' });
  };
  
  return BlogPost;
}; 