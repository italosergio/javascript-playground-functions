const { concatName } = require('../src/challenges');

describe('4 - Crie uma função que use concatenação de strings', () => {
  it('Ao receber a string [\'Lucas\', \'Cassiano\', \'Ferraz\', \'Paolillo\'] retorna o valor \'Paolillo, Lucas\'', () => {
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
  });

  it('Ao receber a string [\'foguete\', \'não\', \'tem\', \'ré\'] retorna o valor \'ré, foguete\'', () => {
    expect(concatName(['foguete', 'não', 'tem', 'ré'])).toBe('ré, foguete');
  });
  
  it('Ao receber a string [\'captain\', \'my\', \'captain\'] retorna o valor \'captain, captain\'', () => {
    expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain');
  });
});
