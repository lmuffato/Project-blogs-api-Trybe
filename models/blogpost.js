/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
module.exports = (sequelize, DataTypes) => { 
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User);
  };  
  return BlogPost;
};
