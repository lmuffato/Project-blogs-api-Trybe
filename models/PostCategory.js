module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {},
  { timestamps: false });

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostsCategory;
}; 