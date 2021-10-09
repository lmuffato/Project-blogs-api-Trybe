const { EditPostService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class EditPostController {
  static async handle(req, res, next) {
    const { id } = req.params;

    const { title, content, categoryIds = false } = req.body;

    const { id: requestId } = req.decode.payload;
    
    if (categoryIds) return next(errors.categoriesCannot);

    const editPostService = new EditPostService(id, requestId, {
      title,
      content,
    });

    const post = await editPostService.handle();

    if (post.invalidUser) return next(errors.unautUser);

    if (post.isServerError) return next(errors.serverError);

    res.status(200).json(post);
  }
}

module.exports = EditPostController;
