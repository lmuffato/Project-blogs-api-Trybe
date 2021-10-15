module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      content: DataTypes.STRING,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
    },
    {
      timestamps: true,
      tableName: 'BlogPosts',
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, 
        { foreignKey: 'user_id', as: 'BlogPost' }); 
    };
  
    return BlogPost;
  };