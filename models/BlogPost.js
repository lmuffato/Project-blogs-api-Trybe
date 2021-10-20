const BlogPsot = (Sequelize, DataTypes) => {
  const blogPost = Sequelize.define('BlogPost', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return blogPost;
};

module.exports = BlogPsot;