module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },  
    title: DataTypes.string,
    content: DataTypes.string,
    userId: DataTypes.integer,
    published: DataTypes.string,
    updated: DataTypes.string,
  }, { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
