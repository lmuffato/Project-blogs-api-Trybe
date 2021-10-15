const TITLE = { message: '"title" is required' };
const CONTENT = { message: '"content" is required' };

const validatePost = (req, res, next) => {
    const { title, content } = req.body;
    if (!title) return res.status(400).json(TITLE);
    if (!content) return res.status(400).json(CONTENT);
    next();
};

module.exports = validatePost;