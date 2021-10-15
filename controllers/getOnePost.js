const { BlogPost, User, PostsCategory, Category } = require('../models');

const ERROR = { message: 'Post does not exist' };

const getOnePost = async (req, res) => {
    const { id } = req.params;
    const encoded = await BlogPost.findByPk(id, { include: [{ model: User }, { model: PostsCategory,
        include: [{ model: Category, attributes: ['name', 'id'] }] }] });
    if (!encoded) return res.status(404).json(ERROR);
    const post = JSON.parse(JSON.stringify(encoded, null, 2));
    const categories = post.PostsCategories.map((category) => {
        const obj = { ...category.Category };        
        console.log(obj);
        return obj;
    });
    const user = post.User;
    delete post.User;
    delete post.PostsCategories;
    return res.status(200).json({ ...post, user, categories });
};

module.exports = getOnePost;