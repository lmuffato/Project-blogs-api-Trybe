module.exports = (sequelize, _DataTypes) => {
  const Postcategory = sequelize.define('Postcategory',
    {},
    { timestamps: false, tableName: 'PostsCategories' });

    Postcategory.associate = (models) => {
    models.Blogpost.belongsToMany(models.Category, {
      as: 'category',
      through: Postcategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Blogpost, {
      as: 'blogpost',
      through: Postcategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return Postcategory;
};
