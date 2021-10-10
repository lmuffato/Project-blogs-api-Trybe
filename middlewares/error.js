module.exports = (err, _req, res, _next) => {
  if (err) {
    return res.status(422).json({ err });
  }
};