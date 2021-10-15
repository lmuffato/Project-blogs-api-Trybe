module.exports = (sequelize, DataTypes) => {
 const BlogPost = sequelize.define('BlogPost', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
 },
 {
   timestamps: false,
   tableName: 'BlogPosts',
   underscored: true,
 });
 
  return BlogPost;
};