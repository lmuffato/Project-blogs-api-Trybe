const { Posts } = require('../middleware/schema');
const { Post, User, Category } = require('../models');

const createPost = async (data, { id: userId }) => {
    const { error } = Posts.validate(data);
    if (error) return { status: 400, message: error.details[0].message };

    const { categoryIds, title, content } = data;
    const post = await Post
        .create({ title, content, userId, published: new Date(), updated: new Date() });

    const Categories = await Category.findAll({ where: { id: categoryIds } });

    if (Categories.length !== categoryIds.length) {
        return { status: 400, message: '"categoryIds" not found' };
    }

    return { status: 201, data: post };
};

const getAllPost = async () => {
    const posts = await Post.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });

    return { status: 200, data: posts };
};

const getByIdPost = async (id) => {
    const post = await Post.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    if (!post) return { status: 404, message: 'Post does not exist' };
    return { status: 200, data: post };
};

module.exports = { createPost, getAllPost, getByIdPost };
