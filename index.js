const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const numbers = prompt(
  'Enter a list of number separated by a comma. For example: 1,2,3: '
).split(',');

/**
 * TODO: Creates a new array of numbers that are the result of
 * squaring the respective numbers in the given array.
 * For example: if numbers = [1, 2, 3], the result should be [1,
 * 4, 9]
 */
const result = undefined;

console.log(result);

module.exports = {
  result,
};
