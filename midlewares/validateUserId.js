const { BlogPost } = require('../models');
const { takeToken } = require('../services');

const validateUserId = async (req, res, next) => {
    const { authorization } = req.headers;
    const { id } = req.params;
    const { payload } = takeToken(authorization);
    const encoded = await BlogPost.findByPk(id);
    const post = JSON.parse(JSON.stringify(encoded, null, 2));
    if (post.userId !== payload) return res.status(401).json({ message: 'Unauthorized user' });
    next();
};

module.exports = validateUserId;