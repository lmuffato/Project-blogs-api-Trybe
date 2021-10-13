const PostCategory = (sequelize, DataTypes) => {
    const postCategory = {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    };
    return postCategory;
};

module.exports = PostCategory;