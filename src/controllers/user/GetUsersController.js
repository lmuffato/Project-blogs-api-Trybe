const { GetUsersService } = require('../../services/user');
const { errors } = require('../../utils/messages');

class GetUsersController {
  static async handle(_req, res, next) {
    const users = await GetUsersService.handle();

    if (users.isServerError) next(errors.serverError);

    res.status(200).json(users);
  }
}

module.exports = GetUsersController;
