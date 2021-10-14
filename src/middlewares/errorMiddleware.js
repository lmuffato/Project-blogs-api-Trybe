module.exports = (error, _req, res, _next) => {
  if (error.code || error.status) {
    return res.status(error.status || error.code).json({ message: error.message });
  }

  res.status(error.status || 500);

  return res.json({ message: error.message });
};
