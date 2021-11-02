module.exports = {
  makeRes: (res, { status, message }) => res.status(status).json({ message }),
};
