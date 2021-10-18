// models/UserBook.js
const PostsCategories = (sequelize, _DataTypes) => {
  const PostCategoriesModel = sequelize.define('PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' });

  PostCategoriesModel.associate = (models) => {
    models.Blogpost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoriesModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Blogpost, {
      as: 'posts',
      through: PostCategoriesModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategoriesModel;
};
module.exports = PostsCategories;