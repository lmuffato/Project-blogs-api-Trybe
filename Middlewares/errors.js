const handleErrors = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }

  return res.status(err.code).json({ message: err.message });
};

module.exports = {
  handleErrors,
};
