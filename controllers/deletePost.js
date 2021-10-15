const { BlogPost } = require('../models');

const deleteBlogPost = async (req, res) => {
    const { id } = req.params;
    await BlogPost.destroy({ where: { id } });
    return res.status(204).end();
};

module.exports = deleteBlogPost;