const { User } = require('../../models');

class GetUserByIdService {
  constructor(id) {
    this.id = id;
  }

  async handle() {
    try {
      const user = await User.findByPk(this.id);

      return user;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = GetUserByIdService;
