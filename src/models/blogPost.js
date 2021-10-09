/**
* @param {import('sequelize').Sequelize} sequelize 
* @param {import('sequelize').DataTypes} DataTypes 
* @return 
*/ 

module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
    underscored: true,
  });

  BlogPosts.associate = ({ User }) => {
    BlogPosts.belongsTo(User, { foreignKey: 'userId', as: 'users' });
  };
  
  return BlogPosts;
};