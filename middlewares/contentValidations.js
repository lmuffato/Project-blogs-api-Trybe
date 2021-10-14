const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (content === undefined) return res.status(400).json({ message: '"content" is required' });
  next();
};

module.exports = validateContent;