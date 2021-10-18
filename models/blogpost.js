module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    id: { type: DataTypes.INTEGER, primaryKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, 
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};

// Associação e relacionamento feito com base no material da aula ao vivo e no artigo do link: https://medium.com/@rogeriothe_48115/relacionamentos-com-sequelize-guia-final-2b3baf21b2a1