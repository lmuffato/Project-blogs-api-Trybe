function blogPost(sequelize, DataTypes) {
    const BlogPost = sequelize.define('BlogPost', {        
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,                 
    }, { timestamps: true, updatedAt: 'updated', createdAt: 'published' });
    BlogPost.associate = (models) => { 
        BlogPost.belongsTo(models.User, { foreignKey: 'userId' });
        BlogPost.hasMany(models.PostsCategory, { foreignKey: 'postId' }); 
    };    
    return BlogPost;
}

module.exports = blogPost;