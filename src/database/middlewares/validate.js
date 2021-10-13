module.exports = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return next(error);

  return next();
};