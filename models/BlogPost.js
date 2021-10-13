const BlogPost = (sequelize, DataTypes) => {
    const blogPost = {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    };
    return blogPost;
};

module.exports = BlogPost;