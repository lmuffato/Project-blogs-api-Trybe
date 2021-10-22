module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategories,
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategories,
      foreignKey: 'categoryId',
      as: 'posts',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
}; 