const { GetPostsService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class GetPostsController {
  static async handle(_req, res, next) {
    const posts = await GetPostsService.handle();

    if (!posts || posts.isServerError) return next(errors.serverError);

    res.status(200).json(posts);
  }
}

module.exports = GetPostsController;
