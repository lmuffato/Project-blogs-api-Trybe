const postCategories = (sequelize, _DataTypes) => {
  const postCategoriesModel = sequelize.define('PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' });
  
    postCategoriesModel.associate = (model) => {
      model.BlogPosts.belongsToMany(model.Categories, {
        as: 'categories',
        through: postCategoriesModel,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      model.Categories.belongsToMany(model.BlogPosts, {
        as: 'posts',
        through: postCategoriesModel,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    return postCategoriesModel;
};

module.exports = postCategories;