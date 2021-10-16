module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      timestamps: false,
      tableName: 'BlogPosts',  
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.users,
        { foreignKey: 'user_id', as: 'user' });
    };
  return BlogPost;
};