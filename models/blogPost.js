module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', { title: DataTypes.STRING,
      content: DataTypes.STRING,
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };
  // BlogPost.associate = (models) => {
  //   BlogPost.hasMany(models.PostsCategory, {
  //     foreignKey: 'postId',
  //   });
  // };
  return BlogPost;
};
