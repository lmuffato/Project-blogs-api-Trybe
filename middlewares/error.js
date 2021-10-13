module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({
      message: err.details[0].message,
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  }

  console.error(err);

  return res.status(err.code).json({
      message: err.message,
  });
};
