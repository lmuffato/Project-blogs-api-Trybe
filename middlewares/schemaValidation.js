module.exports = (req, res, next, schema) => {
  try {
    const schemaError = schema.validate(req.body).error;
    if (schemaError) throw new Error(schemaError.message);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
