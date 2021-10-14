module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostCategory',
  {},
  { timestamps: false, tableName: 'PostsCategories' });

  PostsCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};
