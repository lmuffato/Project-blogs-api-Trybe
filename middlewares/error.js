module.exports = (err, _req, res, _next) => {
  const { statusCode, details } = err;
  if (err.isJoi) {
    return res.status(statusCode).json({ message: details[0].message });
  }
  res.status(statusCode || 500).json({ message: err.message });
};