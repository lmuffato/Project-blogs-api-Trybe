module.exports = (sequelize, _DataTypes) => {
    const PostsCategories = sequelize.define('PostsCategory', {}, {
        tableName: 'PostsCategories', timestamps: false,
    });

    PostsCategories.associate = ({ Post, Category }) => {
        Post.belongsToMany(Category, {
            as: 'categories',
            through: PostsCategories,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
        Category.belongsToMany(Post, {
            as: 'posts',
            through: PostsCategories,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };

    return PostsCategories;
}; 
