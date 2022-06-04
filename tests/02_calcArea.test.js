const { calcArea } = require('../src/challenges');

describe('2 - Crie uma função que calcule a área do triângulo', () => {
  it('Ao receber os valores \'base\' igual a 10 e height igual a 50, retorna 250', () => {
    expect(calcArea(10, 50)).toBe(250);
  });

  it('Ao receber os valores \'base\' igual a 5 e height igual a 2, retorna 5', () => {
    expect(calcArea(5, 2)).toBe(5);
  });
  
  it('Ao receber os valores \'base\' igual a 51 e height igual a 1, retorna 25.5', () => {
    expect(calcArea(51, 1)).toBe(25.5);
  });
});
