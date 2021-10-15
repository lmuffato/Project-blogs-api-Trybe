module.exports = (sequelize, DataTypes) => {
const BlogPost = sequelize.define('BlogPost',
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};

// Source: --> Sobre associações: https://sequelize.org/master/manual/assocs.html
// --> Sobre Models em geral: https://sequelize.org/master/manual/model-basics.html
