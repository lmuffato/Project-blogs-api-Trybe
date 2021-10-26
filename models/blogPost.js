module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
    timestamp: false,
  });

  BlogPost.associate = (models) => {
    models.BlogPost.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
  };

  return BlogPost;
};
