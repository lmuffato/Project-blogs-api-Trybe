module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.Category, {
      foreignKey: 'id', as: 'Categories',
    });
  };

  return PostsCategory;
};
