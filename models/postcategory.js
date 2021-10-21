module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
        as: 'category',
        through: PostsCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogpost',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    };
  
  return PostsCategory;
};