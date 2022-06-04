const { compareTrue } = require('../src/challenges');

describe('1 - Crie uma função usando o operador &&', () => {
  it('Retorna \'false\' com um dos parâmetros \'false\' e outro \'true\'', () => {
    expect(compareTrue(false, true)).toBe(false);
    expect(compareTrue(true, false)).toBe(false);
  });

  it('Retorna \'false\' com os dois parâmetros \'false\'', () => {
    expect(compareTrue(false, false)).toBe(false);
  });
  
  it('Retorna \'true\' com os dois parâmetros \'true\'', () => {
    expect(compareTrue(true, true)).toBe(true);
  });
});
