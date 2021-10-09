const { GetPostByIdService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class GetPostByIdController {
  static async handle(req, res, next) {
    const { id } = req.params;

    const getPostByIdService = new GetPostByIdService(id);

    const post = await getPostByIdService.handle();

    if (!post) return next(errors.postNotExist);

    if (post.isServerError) return next(errors.serverError);

    res.status(200).json(post);
  }
}

module.exports = GetPostByIdController;
