const validateCategoryIds = async (arrayNewPost, allCategory) => {
  const arrayCategoryIds = [];
  arrayCategoryIds.push(allCategory.map((category) => category.id)); // retirar id dos obj e coloca em array
  const filteredCategory = arrayCategoryIds.filter((category) => arrayNewPost.includes(category));

  if (filteredCategory.length !== arrayNewPost.length) {
      return '!existsCategory';
  }
  return 'existsCategory';
};

module.exports = { validateCategoryIds };