module.exports = async (err, req, res, _next) => {
  if (err) {
    res.status(err.code).json({ message: err.message });
  }
};