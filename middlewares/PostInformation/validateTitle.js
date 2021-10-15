module.exports = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: '\"title\" is required'
    })
  }

  next();
}