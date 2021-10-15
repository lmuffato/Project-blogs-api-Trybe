module.exports = (sequelize, DataTypes) => {
const BlogPost = sequelize.define('BlogPost',
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false, tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return BlogPost;
};

// Source: --> Sobre associações: https://sequelize.org/master/manual/assocs.html
// --> Sobre Models em geral: https://sequelize.org/master/manual/model-basics.html
