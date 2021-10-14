module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      timestamps: false,
      tableName: 'BlogPosts',
    });

  Post.associate = (models) => {
    Post.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return Post;
};
