module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  // };

  return BlogPost;
};