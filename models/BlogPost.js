module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    // createdAt: 'published', // O campo createdAt será exibido com o campo "published". O campo createdAt é um campo próprio da tabela do sequelize, e registra a data de que um registro foi feito no bando de dados.
    // updatedAt: 'updated', // O campo updatedAt será exibido com o campo "updated". O campo updatedAt é um campo próprio da tabela do sequelize, e registra a data que um registro foi alterado no banco de dados.
    tableName: 'BlogPosts', // Tabela a ser acessada pelo banco de dados;
    timestamps: false, // Quando este campo está habilitado, os campos createdAt e updatedAt são automaticamente preenchidos com suas respectivias datas.
  });

  BlogPost.associate = (models) => { // Define a associação entre um campo da tabela  BlogPots e a tabela Users.
    BlogPost.belongsTo(models.User, { // O campo indicado pertence a tabela User, acessada pelo models.User.
      foreignKey: 'userId', as: 'user' }); // Esse campo acessa a chave extrangeira userId conffigurada no migrate, e exibe esse campo com o nome "user".
  };
  return BlogPost;
};
