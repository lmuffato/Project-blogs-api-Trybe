const {
  CreateUserService,
  GetUserByEmailService,
} = require('../../services/user');

const { errors } = require('../../utils/messages');

class CreateUserController {
  static async handle(req, res, next) {
    const { displayName, email, password, image } = req.body;

    const getUserByEmailService = new GetUserByEmailService(email);

    const userByEmail = await getUserByEmailService.handle();

    if (userByEmail) return next(errors.alreadyExists);

    const createUserService = new CreateUserService({
      displayName,
      email,
      password,
      image,
    });

    const user = await createUserService.handle();

    if (!user || user.isServerError) return next(errors.serverError);

    res.status(201).json(user);
  }
}

module.exports = CreateUserController;
