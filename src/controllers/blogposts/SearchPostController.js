const { SearchPostService } = require('../../services/blogposts');
const { errors } = require('../../utils/messages');

class SearchPostController {
  static async handle(req, res, next) {
    const { q: searchValue } = req.query;

    const searchPostsService = new SearchPostService(searchValue);

    const posts = await searchPostsService.handle();

    if (posts.isServerError) return next(errors.serverError);

    res.status(200).json(posts);
  }
}

module.exports = SearchPostController;
