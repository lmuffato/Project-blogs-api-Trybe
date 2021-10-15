module.exports = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: '\"password\" is required'
    })
  }

  if (password.length !== 6) {
    return res.status(400).json({
      message: '\"password\" length must be 6 characters long'
    })
  }

  next();
}