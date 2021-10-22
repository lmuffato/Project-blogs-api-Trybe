const postCategory = (Sequelize, _DataTypes) => {
  const table = Sequelize.define('PostCategory',
    {},
    { timestamps: false });

  table.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: table,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: table,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return table;
};

module.exports = postCategory;