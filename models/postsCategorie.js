module.exports = (sequelize, _DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie',
    {},
    { timestamps: false });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategorie;
};