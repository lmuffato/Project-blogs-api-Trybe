const postCategories = (sequelize, _DataTypes) => {
  const postCategoriesModel = sequelize.define('PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' });
  
    postCategoriesModel.associate = (model) => {
      model.BlogPosts.belongsToMany(model.Categories, {
        as: 'categories',
        through: postCategoriesModel,
        foreignKey: 'id',
        otherKey: 'id',
      });
      model.Categories.belongsToMany(model.BlogPosts, {
        as: 'posts',
        through: postCategoriesModel,
        foreignKey: 'id',
        otherKey: 'id',
      });
    };
    return postCategoriesModel;
};

module.exports = postCategories;