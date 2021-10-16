const attributes = {
  createdAt: 'published',
  updatedAt: 'updated',
  tableName: 'BlogPosts',
  indexes: [{
    unique: false,
    fields: ['title', 'content'],
  }],
};

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    attributes);

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    BlogPost.hasMany(models.PostsCategory, { foreignKey: 'postId', as: 'postscategories' });
  };

  return BlogPost;
};
