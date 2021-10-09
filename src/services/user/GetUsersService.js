const { User } = require('../../models');

class GetUsersService {
  static async handle() {
    try {
      const users = await User.findAll();

      return users;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = GetUsersService;
