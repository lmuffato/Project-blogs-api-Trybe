const { DeleteUsersService } = require('../../services/user');
const { errors } = require('../../utils/messages');

class DeleteUsersController {
  static async handle(req, res, next) {
    const { id } = req.decode.payload;

    const deleteUsersService = new DeleteUsersService(id);

    const deletedUser = await deleteUsersService.handle();

    if (deletedUser.isServerError) return next(errors.serverError);

    res.status(204).send();
  }
}

module.exports = DeleteUsersController;
