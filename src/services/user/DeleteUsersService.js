const { User } = require('../../models');

class DeleteUsersService {
  constructor(id) {
    this.id = id;
  }

  async getUser() {
    try {
      const user = await User.findByPk(this.id);

      return user;
    } catch (e) {
      console.error(e);
      return { isError: true };
    }
  }

  async handle() {
    try {
      const user = await this.getUser();

      await user.destroy();

      return { isDeleted: true };
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = DeleteUsersService;
