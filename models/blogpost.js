module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    models.BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  return BlogPost;
};