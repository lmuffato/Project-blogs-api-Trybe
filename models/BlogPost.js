function blogPost(sequelize, DataTypes) {
    const BlogPost = sequelize.define('BlogPost', {        
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    });
    BlogPost.associate = (models) => { 
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
        BlogPost.hasOne(models.PostCategory, { foreignKey: 'categoryId', as: 'postCategory' });
    };    
    return BlogPost;
}

module.exports = blogPost;