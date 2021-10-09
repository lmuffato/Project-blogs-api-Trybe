const { CreatePostService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class CreatePostController {
  static async handle(req, res, next) {
    const { title, content, categoryIds } = req.body;

    const { id } = req.decode.payload;

    const userId = id;

    const createPostService = new CreatePostService({
      title,
      content,
      categoryIds,
      userId,
    });

    const post = await createPostService.handle();

    if (post.notFound) return next(errors.categoryIdsNotFound);

    if (post.isServerError) return next(errors.serverError);

    res.status(201).json(post);
  }
}

module.exports = CreatePostController;
