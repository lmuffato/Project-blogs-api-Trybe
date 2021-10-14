/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        name: DataTypes.STRING,
      }, { timestamps: false });
  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost,
      { as: 'CategoryToPosts', through: models.PostsCategory, foreignKey: 'categoryId' });
  };
  return Category;
};