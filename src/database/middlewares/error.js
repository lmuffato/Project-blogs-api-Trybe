const STATUS_CODE = {
  conflict: 409,
  badRequest: 400,
};

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }

  if (err.code) {
    return res.status(STATUS_CODE[err.code]).json({ message: err.message });
  }

  return res.status(500).json({ message: `Internal server error: ${err.message}` });
};