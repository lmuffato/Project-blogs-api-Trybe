module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
    });
    Category.associate = (models) => {
        Category.hasMany(models.PostCategory, {
            foreignKey: 'categoryId',
            as: 'postsCategories',
        });
    };    
    return Category;
};