const validateUniqueEmail = (error) => {
  const [ValidationErrorItem] = error;
  if (ValidationErrorItem.message === 'Users.email must be unique') {
    return 'User already registered';
  }
  const [message] = error;
  return message.message;
};

module.exports = (error, _req, res, _next) => {
  if (error.code && error.status) {
    return res.status(error.status).json({ message: error.message, code: error.code });
  }

  if (error.errors) {
    res.status(400).json({ message: validateUniqueEmail(error.errors) });
  }

  res.status(error.status || 500);

  return res.json({ message: error.message });
};
