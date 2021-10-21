const nameValidation = (req, res, next) => {
  const { displayName } = req.body;
  // console.log(displayName);
  if (typeof (displayName) !== 'string' || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

module.exports = nameValidation;
