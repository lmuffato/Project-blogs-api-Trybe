const PostCategory = (sequelize, DataTypes) => {
  const postcategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'PostsCategories',
    timestamps: false,
  });

  return postcategory;
};

module.exports = PostCategory;
