const PostCategory = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostsCategories', {}, { timestamps: false });

  postCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, { 
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPosts, { 
      as: 'posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    },
    { timestamps: false });
  };

  return postCategory;
};

module.exports = PostCategory;
