const { GetUserByIdService } = require('../../services/user');
const { errors } = require('../../utils/messages');

class GetUserByIdController {
  static async handle(req, res, next) {
    const { id } = req.params;

    const getUserByIdService = new GetUserByIdService(id);

    const user = await getUserByIdService.handle();

    if (!user) return next(errors.userNotExists);

    if (user.isServerError) return next(errors.serverError);

    res.status(200).json(user);
  }
}

module.exports = GetUserByIdController;
