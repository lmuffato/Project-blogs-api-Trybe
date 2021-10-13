const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId',
    });
  };

  return blogPost;
};

module.exports = BlogPost;
