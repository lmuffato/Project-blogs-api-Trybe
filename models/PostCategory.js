const PostCategory = (sequelize) => {
  const postCategory = sequelize.define(
    'PostCategory', {}, { timestamps: false },
  );

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategory;
};

module.exports = PostCategory;
