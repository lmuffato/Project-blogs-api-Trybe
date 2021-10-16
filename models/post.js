module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, { 
    timestamps: true,
    updatedAt: 'updated', 
    createdAt: 'published',
    tableName: 'BlogPosts',
  });
  post.associate = (models) => { 
    post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };  
  return post;
};