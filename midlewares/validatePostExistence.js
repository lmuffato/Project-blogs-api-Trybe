const { BlogPost } = require('../models');

const validatePostExistence = async (req, res, next) => {
    const { id } = req.params;
    const encoded = await BlogPost.findByPk(id);
    if (!encoded) return res.status(404).json({ message: 'Post does not exist' });
    next();
};

module.exports = validatePostExistence;