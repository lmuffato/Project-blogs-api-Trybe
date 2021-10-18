module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, primaryKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, 
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};