module.exports = (err, _req, res, _next) => {
  if (err) {
    return res.status(err.status).json({ message: err.error });
  }
};