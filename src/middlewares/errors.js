module.exports = (error, _req, res, _next) => {
  const { message, status } = error;

  res.status(status || 500).json({ message });
};
