module.exports = (err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
};
