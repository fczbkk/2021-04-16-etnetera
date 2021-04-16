/**
 * @typedef {Object} special_point
 * @property {number} divisor
 * @property {string} label
 */

/**
 * @typedef {Object} sequence_generator_config
 * @param {number} [range_from = 0]
 * @param {number} [range_to = 0]
 * @param {Array.<special_point>} [special_points]
 */

/**
 * Returns value for specific number to be used in the sequence, based on special points config.
 * @param {number} i
 * @param {Array.<special_point>} special_points
 * @return {string}
 */
function getSequenceValueForNumber (i, special_points) {
  return special_points
      .filter(({divisor}) => i % divisor === 0)
      .map(({label}) => label)
      .join('')
    || i.toString();
}

/**
 * Generates sequence of numbers or labels for divisors of the numbers.
 * @param {sequence_generator_config} config
 * @return {Array.<string>}
 */
function generateSequence ({
  range_from = 0,
  range_to = 0,
  special_points = []
} = {}) {
  const result = [];

  for (let i = range_from; i <= range_to; i++) {
    result.push(getSequenceValueForNumber(i, special_points));
  }

  return result;
}

// output FizzBuzz sequence
const fizz_buzz_sequence = generateSequence({
  range_from: 1,
  range_to: 100,
  special_points: [
    {divisor: 3, label: 'Fizz'},
    {divisor: 5, label: 'Buzz'}
  ]
});
console.log(fizz_buzz_sequence.join('\n'));
