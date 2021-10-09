const { User } = require('../../models');

class GetUserByEmailService {
  constructor(email) {
    this.email = email;
  }

  async handle() {
    const user = await User.findOne({ where: { email: this.email } });

    if (!user) return null;

    return user;
  }
}

module.exports = GetUserByEmailService;
