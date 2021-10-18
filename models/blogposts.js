module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
tableName: 'BlogPosts',
timestamps: false,
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return blogPosts;
};
