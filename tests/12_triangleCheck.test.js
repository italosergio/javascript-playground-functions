const { triangleCheck } = require('../src/challenges2');

describe('12 - Crie uma função de Condição de existência de um triângulo', () => {
  it('Retorna \'false\' quando a medida de qualquer um dos lados for MAIOR que a soma das medidas dos outros dois', () => {
    expect(triangleCheck(5, 1, 1)).toBe(false);
    expect(triangleCheck(322, 511, 999)).toBe(false);
    expect(triangleCheck(7, 25, 43)).toBe(false);
  });

  it('Retorna \'false\' quando a medida de qualquer um dos lados for MENOR que o valor absoluto da diferença entre os outros dois lados', () => {
    expect(triangleCheck(1, 7, 5)).toBe(false);
    expect(triangleCheck(3, 4, 0.5)).toBe(false);
    expect(triangleCheck(5, 1, 7)).toBe(false);
  });
  
  it('Retorna \'true\' quando a medida de qualquer um dos lados for MENOR que a soma das medidas dos outros dois lados', () => {
    expect(triangleCheck(5, 6, 7)).toBe(true);
    expect(triangleCheck(999, 777, 333)).toBe(true);
    expect(triangleCheck(16046, 17447, 30000)).toBe(true);
  });

  it('Retorna \'true\' quando a medida de qualquer um dos lados for MAIOR que o valor absoluto da diferença entre os outros dois lados', () => {
    expect(triangleCheck(9, 7, 6)).toBe(true);
    expect(triangleCheck(42, 59, 99)).toBe(true);
    expect(triangleCheck(77, 77, 66)).toBe(true);
  });
});
