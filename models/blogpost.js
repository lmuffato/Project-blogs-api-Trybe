module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  return BlogPost;
};