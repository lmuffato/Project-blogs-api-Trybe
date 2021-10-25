module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true, defaultValue: 1 },
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'User' });
  };
  return BlogPost;
};