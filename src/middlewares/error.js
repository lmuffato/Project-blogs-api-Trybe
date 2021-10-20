module.exports = async (err, req, res, _next) => {
  if (err) {
    res.status(err.code).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json();
};