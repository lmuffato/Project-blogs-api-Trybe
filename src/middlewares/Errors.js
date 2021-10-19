module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ message: err.message });
  if (err.code) return res.status(err.code).json({ message: err.message });
  return res.status(500).json({ message: err.message });
};
