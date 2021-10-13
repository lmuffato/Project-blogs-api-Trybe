module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
