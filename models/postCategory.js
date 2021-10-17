module.exports = (sequelize, _DataTypes) => {
    const postCategory = sequelize.define('PostsCategories',
      {},
      { timestamps: false });
  
    postCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPosts, {
        as: 'posts',
        through: postCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.BlogPosts.belongsToMany(models.Category, {
        as: 'categories',
        through: postCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  
    return postCategory;
  };