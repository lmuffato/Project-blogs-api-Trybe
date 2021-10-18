module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {},
    { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'blog_post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'blog_post_id',
    });
  };

  return PostCategory;
};
