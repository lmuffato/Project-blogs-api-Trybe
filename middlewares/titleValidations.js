const validateTitle = (req, res, next) => {
  console.log(req.body);
  const { title } = req.body;
  if (title === undefined) return res.status(400).json({ message: '"title" is required' });
  next();
};

module.exports = validateTitle;