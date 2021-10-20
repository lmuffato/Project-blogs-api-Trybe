const { BlogPost, Category, User } = require('../models');

const Schema = require('../utils/schema');

const create = async (body, userId) => {
  const { error } = Schema.BlogPost.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const { title, content, categoryIds } = body;

  const checkCategories = await Category.findAll({ where: { id: categoryIds } });

  if (checkCategories.length !== categoryIds.length) {
    return { status: 400, message: '"categoryIds" not found' };
  }

  const post = await BlogPost
    .create({ title, content, userId, published: new Date(), updated: new Date() });

  return { status: 201, data: post };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!posts) return { status: 400, message: 'Posts empty' };

  return { status: 200, data: posts };
};

module.exports = {
  create,
  getAll,
};

/* 
  Entendi o uso de passar o id como parâmetro, pois somente um usuário com token
  autenticado poderia fazer esse POST, e logo isso já diz que é um usuário no sistema.
  E assim podendo checkar se o número de ids cadastrados batem com o que está no banco.
  Entendi esses usos através do PR do Adelino Júnior https://github.com/tryber/sd-010-a-project-blogs-api/pull/10 
*/