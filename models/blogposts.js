module.exports = (sequelize, DataTypes) => {
 const BlogPost = sequelize.define('BlogPost', {
  id: { type: DataTypes.INTERGER, primaryKey: true },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
},
{
   timestamp: false,
   tableName: 'BlogPosts',
   underscored: true,
});

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.users,
      { foreignKey: 'userId', as: 'userId' });
  };

  return BlogPost;
};