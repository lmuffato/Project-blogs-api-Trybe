const blogPost = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
   {
     timestamps: false,
     tableName: 'BlogPosts',
   });

   blogPostModel.associate = (model) => {
     blogPostModel.belongsTo(model.User, {
       foreignKey: 'userId', as: 'user',
     });
   };

   return blogPostModel;
};

module.exports = blogPost;