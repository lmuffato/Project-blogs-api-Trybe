const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTERGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRINGS,
    content: DataTypes.STRINGS,
    userId: { type: DataTypes.INTERGER, foreignKey: true },
    published: DataTypes.STRINGS,
    updated: DataTypes.STRINGS,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.user, {
      foreignKey: 'user_id', as: 'user',
    });
  };
  return blogPost;
};

module.exports = BlogPost;