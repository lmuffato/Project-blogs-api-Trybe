const sequelizeNoUpdateAttributes = require('sequelize-noupdate-attributes');

const categoriesOpt = {
  as: 'categories',
  foreignKey: 'postId',
  otherKey: 'categoryId',
  noUpdate: true,
};

const postsOpt = {
  as: 'posts',
  foreignKey: 'categoryId',
  otherKey: 'postId',
  noUpdate: true,
};

module.exports = (sequelize, _DataTypes) => {
  sequelizeNoUpdateAttributes(sequelize);

  const PostsCategories = sequelize.define(
    'PostsCategories',
    {},
    { timestamps: false },
  );

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      ...categoriesOpt,
      through: PostsCategories,
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      ...postsOpt,
      through: PostsCategories,
    });
  };

  return PostsCategories;
};
