/**
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
* @return 
*/ 
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, 
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, 
  }, {
tableName: 'BlogPosts',
timestamps: false,
  });
  blogPosts.associate = ({ User }) => {
    blogPosts.belongsTo(User, {
      foreignKey: 'userId', as: 'user',
    });
  };
  return blogPosts;
};