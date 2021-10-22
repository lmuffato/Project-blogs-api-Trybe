module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategories,
      foreignKey: 'post_id',
      as: 'categories',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategories,
      foreignKey: 'category_id',
      as: 'posts',
      otherKey: 'post_id',
    });
  };

  return PostsCategories;
}; 