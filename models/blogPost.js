const BlogPost = (sequelize, DataTypes) => { // BlogPost é o nome da funcao. Ele deve ser o mesmo da entidade.
  const blogpost = sequelize.define('BlogPost', { // const variavel = sequelize.define('Entidade'),

    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER }, 

    // DUVIDA - POR QUE USAR LINHA 9 nao 10?
    published: { type: DataTypes.DATE },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     as: 'published',
    //   //   autoIncrement: true,
    // },
    updated: { type: DataTypes.DATE },
    // updatedAt: { type: DataTypes.DATE, as: 'updated',
    //   autoIncrement: true,
    // },
  }, { timestamps: false });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User, {
      foreignKey: 'userId', // a chave de User que esta ligada a BlogPost 
      // Se belongTo, a foreignKey será da tabela source(BlogPost)
      as: 'user',
    });
  };
  return blogpost;
};

module.exports = BlogPost;