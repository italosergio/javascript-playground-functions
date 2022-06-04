const { splitSentence } = require('../src/challenges');

describe('3 - Crie uma função que divida a frase', () => {
  it('Ao receber a string \'go Trybe\' retorna o valor [\'go\', \'Trybe\']', () => {
    expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
  });

  it('Ao receber a string \'vamo que vamo\' retorna o valor [\'vamo\', \'que\', \'vamo\']', () => {
    expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
  });

  it('Ao receber a string \'foguete\' retorna o valor [\'foguete\']', () => {
    expect(splitSentence('foguete')).toEqual(['foguete']);
  });
});
