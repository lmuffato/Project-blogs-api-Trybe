const clientErrors = {
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  conflict: 409,
};

const success = {
  ok: 200,
  created: 201,
};

const serverErrors = {
  internal: 500,
};

module.exports = {
    clientErrors,
    serverErrors,
    success,
};
