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
  return BlogPost;
}; 