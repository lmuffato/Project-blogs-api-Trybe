module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  BlogPosts.associate = ({ User }) => {
    BlogPosts.hasMany(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
