module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    });
    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.BlogPost, { foreignKey: 'postId', as: 'blogPosts' });
        PostCategory.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'categories' });
    };
    return PostCategory;
};