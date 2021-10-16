module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
  { timestamps: false,
    tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.blogposts.belongsToMany(models.categories, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      othersKey: 'categoryId',
    });
  models.categories.belongsToMany(models.blogposts, {
    as: 'blogposts',
    through: PostCategory,
    foreignKey: 'categoryId',
    othersKey: 'postId',
  });
  };

  return PostCategory;
};