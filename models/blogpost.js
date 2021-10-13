const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPosts", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  return BlogPosts;
};

module.exports = BlogPosts;
