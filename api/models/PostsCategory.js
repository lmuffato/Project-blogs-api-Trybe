module.exports = (sequelize, _DataTypes) => {
    const PostsCategory = sequelize.define('PostsCategory', {},
        { timestamps: false, tableName: 'PostsCategory' });

        PostsCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            through: PostsCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            through: PostsCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
  };
  return PostsCategory;
};