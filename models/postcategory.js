const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'PostsCategories',
    timestamps: false,
  });

  return PostCategory;
};

module.exports = PostCategory;
