module.exports = (sequelize, _DataTypes) => {
 const PostCategorie = sequelize.define('PostCategorie',
   {},
   { timestamps: false });

 PostCategorie.associate = (models) => {
  models.BlogPost.belongsToMany(models.Categorie, {
    as: 'categories',
    through: PostCategorie,
    foreignKey: 'postId',
    otherKey: 'categoryId',
  });
  models.Categorie.hasMany(models.BlogPost, {
    as: 'blogPosts',
    through: PostCategorie,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
 };
 
  return PostCategorie;
};