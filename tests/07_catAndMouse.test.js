const { catAndMouse } = require('../src/challenges');

describe('7 - Crie uma função de Caça ao rato', () => {
  it('Retorna \'cat2\' se o gato 2 está a 2 unidades de distância do rato e o gato 1 está a 3 unidades de distância do rato', () => {
    expect(catAndMouse(1, 4, 3)).toBe('cat2');
  });

  it('Retorna \'cat1\' se o gato 1 está a 6 unidades de distância do rato e o gato 2 está a 12 unidades de distância do rato', () => {
    expect(catAndMouse(6, 0, -6)).toBe('cat1');
  });
  
  it('Retorna \'os gatos trombam e o rato foge\' se os gatos 1 e 2 estão à mesma distância do rato', () => {
    expect(catAndMouse(0, -2, -2)).toBe('os gatos trombam e o rato foge');
  });
});
