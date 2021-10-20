const PostsCategories = (sequelize, _DataTypes) =>
  sequelize.define('PostsCategories', {}, { timestamps: false });

PostsCategories.associate = (models) => {
  models.BlogPost.belongsToMany(models.Category, {
    as: 'categories',
    through: PostsCategories,
    foreignKey: 'postId',
    otherKey: 'categoryId',
  });
  models.Category.belongsToMany(models.BlogPost, {
    as: 'posts',
    through: PostsCategories,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
};

module.exports = PostsCategories;
