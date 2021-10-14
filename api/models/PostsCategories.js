module.exports = (sequelize, _DataTypes) => {
    const PostsCategories = sequelize.define('PostsCategories',
        { timestamps: false, tableName: 'PostsCategories' });

        PostsCategories.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            through: PostsCategories,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
        models.BlogPost.belongsToMany(models.Category, {
            through: PostsCategories,
            foreignKey: 'postId',
            otherKey: 'category_id',
        });
    return PostsCategories;
  };
};