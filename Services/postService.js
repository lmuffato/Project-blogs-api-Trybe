const { builtError } = require('./heplers');
const { Post, Category, User } = require('../models');

const create = async (payload, { id }) => {
  try {
    const { categoryIds, ...data } = payload;
    const isNotValid = await Promise.all(
      categoryIds.map((category) => Category.findByPk(category)),
      ).then((res) => res.some((categorie) => !categorie));

    if (isNotValid) return builtError(400, '"categoryIds" not found');
    
    return Post.create({ ...data, userId: id });
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

const listAll = async () => {
  try {
    const response = await Post.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return response;
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

const listById = async (id) => {
  try {
    const response = await Post.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!response) return builtError(404, 'Post does not exist');

    return response;
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

const update = async (id, { title, content }, userId) => {
  try {
    await Post.update({ title, content }, { where: { id, userId } });

    const result = await Post.findByPk(id, {
       include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });

    if (result.userId !== userId) return builtError(401, 'Unauthorized user');

    return result;
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

module.exports = {
  create,
  listAll,
  listById,
  update,
};
