module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories',
  {}, { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  
  return PostCategory;
};

// Source:
// --> Solução adaptada da proposta de modelagem de tabelas do colega Lucas Lara
// --> Link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1633813173137100
// --> Solução adaptada do PR da colega Marília Cegalla
// --> Link: https://github.com/tryber/sd-010-a-project-blogs-api/blob/maricegalla-project-blogs-api/models/PostsCategory.js
// Documentação consultada: https://sequelize.org/master/manual/assocs.html#many-to-many-relationships
