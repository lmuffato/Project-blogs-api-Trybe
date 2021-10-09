/**
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
* @return 
*/ 
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt: 'published',
    updatedAt: 'updated',
  }, {
tableName: 'BlogPost',
  });

  blogPosts.associate = ({ User }) => {
    blogPosts.hasMany(User, {
      foreignKey: 'id', as: 'userId',
    });
  };
  return blogPosts;
};
