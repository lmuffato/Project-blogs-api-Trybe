const { status } = require('../utils');

const titleValidations = (title) => {
  if (!title) return { code: status.BAD_REQUEST, message: status.TITLE_ERROR };
  return false;
};

const contentValidations = (content) => {
  if (!content) return { code: status.BAD_REQUEST, message: status.CONTENT_ERROR };
  return false;
};

const categoryIdsValidations = (title) => {
  if (!title) return { code: status.BAD_REQUEST, message: status.CATEGORYID_ERROR };
  return false;
};

module.exports = {
  titleValidations,
  contentValidations,
  categoryIdsValidations,
};