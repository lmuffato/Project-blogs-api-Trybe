const statusCode = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  conflict: 409,
 };

function getStatusCode(code) {
  return statusCode[code];
}

module.exports = {
  getStatusCode,
};
