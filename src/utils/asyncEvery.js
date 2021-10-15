const asyncFilter = require('./asyncFilter');

module.exports = async (arr, predicate) => 
(await asyncFilter(arr, predicate)).length === arr.length;