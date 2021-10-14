function validateName(req, res, next) {
  const { displayName } = req.body;

  const validName = displayName.length >= 8;

  if (!validName) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  
  next();
}

module.exports = {
  validateName,
};