const { LoginService } = require('../../services/login');
const { errors } = require('../../utils/messages');

class LoginController {
  static async handle(req, res, next) {
    const { email, password } = req.body;

    const loginService = new LoginService({ email, password });

    const loginToken = await loginService.handle();

    if (!loginToken) return next(errors.invalidFields);

    if (loginToken.isServerError) return next(errors.serverError);

    res.status(200).json(loginToken);
  }
}

module.exports = LoginController;
