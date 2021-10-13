module.exports = async (error, req, res, _next) => {
  res.status(error.code).json({ message: error.message });
};