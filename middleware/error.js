module.exports = async (error, _req, res, _next) => {
  const { message, status } = error;
  res.status(status).json({ message });
};