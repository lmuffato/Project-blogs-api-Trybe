const BlogPost = (sequelize, DataTypes) =>
  sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER, field: 'user_id' },
    },
    {
      underscored: true,
      createdAt: 'published',
      updatedAt: 'updated',
      tableName: 'BlogPosts',
    },
  );

BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

module.exports = BlogPost;
