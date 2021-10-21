module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER, field: 'user_id', foreignKey: true },
    },
    {
      createdAt: 'published',
      updatedAt: 'updated',
    },
  );

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
