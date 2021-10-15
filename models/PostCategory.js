module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {},
  { timestamps: false });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'blog_post_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'blog_post_id',
      otherKey: 'category_id',
    });
    return PostCategory;
  };
};
