const { generatePhoneNumber } = require('../src/challenges2');

describe('11 - Crie uma função de Número de telefone', () => {
  it('Retorna "Array com tamanho incorreto." se o tamanho do array é diferente de 11', () => {
    expect(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe('Array com tamanho incorreto.');
    expect(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe('Array com tamanho incorreto.');
    expect(generatePhoneNumber([7, 7, 7])).toBe('Array com tamanho incorreto.');
    expect(generatePhoneNumber([])).toBe('Array com tamanho incorreto.');
  });

  it('Retorna "não é possível gerar um número de telefone com esses valores" se existir algum valor menor que 0 no array inserido', () => {
    expect(generatePhoneNumber([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([-1, -10, -2, -3, -4, -5, -6, -7, -8, -9, -9999])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorna "não é possível gerar um número de telefone com esses valores" se existir algum valor maior que 9 no array inserido', () => {
    expect(generatePhoneNumber([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9999, 0])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorna "não é possível gerar um número de telefone com esses valores" se existir algum valor que se repete 3 vezes ou mais no array inserido', () => {
    expect(generatePhoneNumber([10, 10, 10, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber([1, 6, 2, 3, 6, 5, 6, 7, 8, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorna o número de telefone gerado corretamente com parênteses, espaço e traço, se os valores do array estiverem corretos ', () => {
    expect(generatePhoneNumber([8, 1, 9, 9, 8, 4, 1, 6, 5, 4, 5])).toBe('(81) 99841-6545');
    expect(generatePhoneNumber([3, 3, 9, 4, 2, 5, 5, 6, 1, 4, 2])).toBe('(33) 94255-6142');
  });
});
