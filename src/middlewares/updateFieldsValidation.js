module.exports = async (req, res, next) => {
  const fields = req.body;

  const arr = Object.keys(fields);

  console.log(arr);

  const result = arr.some((field) => field !== 'title' && field !== 'content');

  console.log(result);

  if (result) {
    return next({
      code: 400,
      message: 'Categories cannot be edited',
    });
  }

  next();
};