module.exports = (sequelize, DataTypes) => {
 const BlogPosts = sequelize.define('BlogPosts', {
  title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
 });
  return BlogPosts;
};