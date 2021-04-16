function getFizzBuzzSequence () {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {output += 'Fizz';}
    if (i % 5 === 0) {output += 'Buzz';}
    if (output === '') {output = i;}
    result.push(output);
  }
  return result;
}
console.log(getFizzBuzzSequence().join('\n'));
