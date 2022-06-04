const { footballPoints } = require('../src/challenges');

describe('5 - Crie uma função que calcule a quantidade de pontos no futebol', () => {
  it('Retorna 50 pontos quando o time tem 14 vitórias e 8 empates', () => {
    expect(footballPoints(14, 8)).toBe(50);
  });

  it('Retorna 5 pontos quando o time tem 1 vitória e 2 empates', () => {
    expect(footballPoints(1, 2)).toBe(5);
  });
  
  it('Retorna 0 pontos quando  o time tem 0 vitórias e 0 empates', () => {
    expect(footballPoints(0, 0)).toBe(0);
  });
});
