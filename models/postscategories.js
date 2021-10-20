module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false, tableName: 'PostsCategories' });

    PostsCategory.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostsCategory;
};