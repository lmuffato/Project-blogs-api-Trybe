module.exports = async (err, req, res, _next) => {
  console.log(err);
  if (err) {
    // console.log(err);
    res.status(err.code).json({ message: err.message });
  }
};