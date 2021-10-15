module.exports = (array, filter) =>
Promise.all(array.map((entry) => filter(entry)))
.then((bits) => array.filter((_entry) => bits.shift()));