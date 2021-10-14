const statusCode = {
  created: { status: 201 },
  badRequest: { status: 400 },
  unauthorized: { status: 401 },
  notFound: { status: 404 },
  conflict: { status: 409 },
 };

function getStatusCode(code) {
  return statusCode[code];
}

module.exports = {
  getStatusCode,
};
