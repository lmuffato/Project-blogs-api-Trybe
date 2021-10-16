module.exports = (sequelize, _DataTypes) => {
    const PostsCategory = sequelize.define('PostsCategory', {},
        { timestamps: false });

        PostsCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            through: PostsCategory,
            as: 'posts',
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            through: PostsCategory,
            as: 'categories',
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
  };
  return PostsCategory;
};