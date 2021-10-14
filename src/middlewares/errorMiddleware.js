module.exports = (error, _req, res, _next) => {
  if (error.code && error.status) {
    return res.status(error.status).json({ message: error.message, code: error.code });
  }

  res.status(error.status || 500);

  return res.json({ message: error.message });
};
