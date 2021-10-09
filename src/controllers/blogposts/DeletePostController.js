const { DeletePostService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class DeletePostController {
  static async handle(req, res, next) {
    const { id } = req.params;

    const { id: requestId } = req.decode.payload;

    const deletePostService = new DeletePostService(id, requestId);

    const deletedPost = await deletePostService.handle();

    if (deletedPost.noPost) return next(errors.noPost);

    if (deletedPost.isServerError) return next(errors.serverError);

    if (deletedPost.invalidUser) return next(errors.unautUser);

    res.status(204).send();
  }
}

module.exports = DeletePostController;
