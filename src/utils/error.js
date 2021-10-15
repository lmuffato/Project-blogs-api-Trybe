function throwError(code, message, getStatusCode) {
  const error = new Error(message);
  const { status } = getStatusCode(code);
  error.status = status;

  throw error;
}

module.exports = {
  throwError,
};
