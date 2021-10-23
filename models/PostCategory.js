const modelConfig = {
  tableName: 'PostsCategories',
  timestamps: false, 
};

// models/PostCategory.js
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {}, modelConfig);
  
  PostCategory.associate = (models) => { // Essa associação define o relacionamento N:N entre as tabelas Category e BlogPost.
    // Define o relacionamento entre as tabelas Category e BlogPost;
    models.Category.belongsToMany(models.BlogPost, { // Uma categoria pode pertencer a vários posts.
      as: 'posts', // A coluna postId da tabela PostCategory é que receberá a associação com as chaves extrangeiras.
      through: PostCategory, // A associação entre os campos será feita através da tabela PostCategory
      foreignKey: 'categoryId', // A chave extrangeira "categoryId" é a chave que será associada a chave otherKey "postId", desta mesma tabela.
      otherKey: 'postId', // A chave  é a outra chave associada a foreignKey "categoryId".
    });

    // Define o relacionamento entre as teabelas Category e BlogPost;
    models.BlogPost.belongsToMany(models.Category, { // Um post pode ter maisd e uma categoria
      as: 'categories', // A coluna categoryId da tabela PostCategory é que receberá a associação com as chaves extrangeiras.
      through: PostCategory, // A associação entre os campos será feita através da tabela PostCategory
      foreignKey: 'postId', // A chave extrangeira "postId" é a chave que será associada a chave otherKey "categoryId", desta mesma tabela.
      otherKey: 'categoryId', // A chave "categoryId" é a outra chave associada a foreignKey "postId".
    });
  };
  return PostCategory;
};

/*

Exemplificando o relacionamento N:N entre as tabelas A e B através da tabela de junção:

  TABELA_DE_JUNCAO.associate = (models) => {

    models.TABELA_A.belongsToMany(models.TABELA_B, {
      as: 'CAMPO_A_DA_TABELA_DE_JUNCAO',
      through: TABELA_DE_JUNCAO,
      foreignKey: 'CAMPO_DA_TABELA_B',
      otherKey: 'CAMPO_DA_TABELA_A',
    });

    models.TABELA_B.belongsToMany(models.TABELA_A, {
      as: 'CAMPO_B_DA_TABELA_DE_JUNCAO',
      through: TABELA_DE_JUNCAO,
      foreignKey: 'CAMPO_DA_TABELA_A',
      otherKey: 'CAMPO_DA_TABELA_B',
    });

*/
