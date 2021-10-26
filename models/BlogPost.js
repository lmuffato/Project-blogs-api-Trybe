module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'BlogPosts',
      underscored: true,
    });
    // search: https://github.com/tryber/sd-010-a-project-blogs-api/pull/114/files
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, 
        { foreignKey: 'userId', as: 'user' }); 
    };
     
    return BlogPost;
  };