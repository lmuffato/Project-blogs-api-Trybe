function throwError(code, message, getStatusCode) {
  const error = new Error(message);
  error.status = getStatusCode(code);

  throw error;
}

module.exports = {
  throwError,
};
