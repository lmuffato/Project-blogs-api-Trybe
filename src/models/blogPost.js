/**
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
* @return 
*/ 

module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      createAt: 'published',
      updateAt: 'updated',
    }, {
      tableName: 'BlogPosts',
    });
  
    return BlogPosts;
  };