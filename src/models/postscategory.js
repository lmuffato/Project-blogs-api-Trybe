module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId', as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategory, foreignKey: 'categoryId', otherKey: 'postId', as: 'blogposts',
    });
  };
  return PostsCategory;
};
