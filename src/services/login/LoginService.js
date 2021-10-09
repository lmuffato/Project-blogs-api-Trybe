const { User } = require('../../models');
const { createToken } = require('../../utils/token');

class LoginService {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  async handle() {
    try {
      const user = await User.findOne({
        where: { email: this.email, password: this.password },
      });

      if (!user) return null;

      const token = createToken(user);

      return { token };
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = LoginService;
