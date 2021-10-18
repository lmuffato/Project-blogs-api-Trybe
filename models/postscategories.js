module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
  { timestamps: false,
    tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      othersKey: 'categoryId',
    });
  models.Category.belongsToMany(models.BlogPost, {
    as: 'blogposts',
    through: PostCategory,
    foreignKey: 'categoryId',
    othersKey: 'postId',
  });
  };

  return PostCategory;
};