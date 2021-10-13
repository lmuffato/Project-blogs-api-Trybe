module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCaterogy',
  {}, { timestamps: false });

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostsCategory;
};
