const error = (err, _req, res, _next) => res.status(err.statusCode).json(err.message);

module.exports = error;