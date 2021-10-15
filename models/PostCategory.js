module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostsCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,        
    }, { timestamps: false });
    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.BlogPost, { foreignKey: 'postId' });
        PostCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
    };
    return PostCategory;
};