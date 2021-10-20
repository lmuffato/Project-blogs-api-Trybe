function loginNotEmpty(request, response, next) {
  const { email, password } = request.body;

  const emailMessageUndefined = '"email" is not allowed to be empty';
  const passwordMessageUndefined = '"password" is not allowed to be empty';

  switch ('') {
    case email:
      return response.status(400).json({ message: emailMessageUndefined });
    case password:
      return response.status(400).json({ message: passwordMessageUndefined });
    default:
      return next();
  }
}

module.exports = { loginNotEmpty };