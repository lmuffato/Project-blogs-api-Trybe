const validatePassword = (req, res, next) => {
  const { password } = req.body;
  console.log('Aqui');
  if (password === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};
module.exports = { validatePassword };