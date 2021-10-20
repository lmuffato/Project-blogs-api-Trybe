class CustomError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

module.exports = CustomError;