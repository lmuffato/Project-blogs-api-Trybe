module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
tableName: 'BlogPosts',
timestamps: false,
  });

  blogPosts.associate = (models) => {
    blogPosts.hasMany(models.User, {
      foreignKey: 'id', as: 'userId',
    });
  };
  return blogPosts;
};
