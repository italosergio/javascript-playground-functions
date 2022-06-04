const { hydrate } = require('../src/challenges2');

describe('13 - Crie uma função de Bem vindo ao Bar da Trybe!', () => {
  it('Nunca bebeu - \'1 cerveja\', recomendar \'1 copo de água\'', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
  });

  it('Iniciante - \'7 cervejas\', recomendar \'7 copos de água\'', () => {
    expect(hydrate('7 cervejas')).toBe('7 copos de água');
  });
  
  it('Amador(a) - \'3 caipirinha, 5 xoxotas e 1 meiota de pitu\', recomendar \'9 copos de água\'', () => {
    expect(hydrate('3 caipirinha, 5 xoxotas e 1 meiota de pitu')).toBe('9 copos de água');
  });

  it('Braba(o) - \'11 shots de russov, 3 submarinos e 1 garrafa 500ml de corote\', recomendar \'15 copos de água\'', () => {
    expect(hydrate('11 shots de russov, 3 submarinos e 1 garrafa 500ml de corote')).toBe('15 copos de água');
  });

  it('Se não for pra dar PT nem vai - \'15 shots de slova com fanta laranja, 14 cervejas Nossa e -13 shots de corote, pois vomitou no processo\', recomendar \'16 copos de água\'', () => {
    expect(hydrate('15 shots de slova com fanta laranja, 14 cervejas Nossa e -13 shots de corote, pois vomitou no processo')).toBe('16 copos de água');
  });
});
