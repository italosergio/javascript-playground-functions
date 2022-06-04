const { fizzBuzz } = require('../src/challenges');

describe('8 - Crie uma função FizzBuzz', () => {
  it('Retorna o array [\'bug!\', \'fizzBuzz\', \'bug!\', \'fizz\', \'fizzBuzz\'] quando é passado o parâmetro [2, 15, 7, 9, 45]', () => {
    expect(fizzBuzz([2, 15, 7, 9, 45])).toStrictEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
  });

  it('Retorna o array [\'bug!\', \'fizz\'] quando é passado o parâmetro [7, 9]', () => {
    expect(fizzBuzz([7, 9])).toStrictEqual(['bug!', 'fizz']);
  });
  
  it('Retorna o array [\'fizz\', \'buzz\'] quando é passado o parâmetro [9, 25]', () => {
    expect(fizzBuzz([9, 25])).toStrictEqual(['fizz', 'buzz']);
  });
});
