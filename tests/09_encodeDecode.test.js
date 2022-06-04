const { encode, decode } = require('../src/challenges');

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  describe('Utilizando a função encode', () => {
    it('Retorne a string codificada \'Ol1, t5d4 b2m?\' quando o parâmetro é \'Ola, tudo bem?\'', () => {
      expect(encode('Ola, tudo bem?')).toBe('Ol1, t5d4 b2m?');
    });

    it('Retorne a string codificada \'5m1_s2nh1_m53t4_f4rt2\' quando o parâmetro é \'uma_senha_muito_forte\'', () => {
      expect(encode('uma_senha_muito_forte')).toBe('5m1_s2nh1_m53t4_f4rt2');
    });
  });

  describe('Utilizando a função decode', () => {
    it('Retorne a string decodificada \'Ola, tudo bem?\' quando o parâmetro é \'Ol1, t5d4 b2m?\'', () => {
      expect(decode('Ol1, t5d4 b2m?')).toBe('Ola, tudo bem?');
    });

    it('Retorne a string decodificada \'uma_senha_muito_forte\' quando o parâmetro é \'5m1_s2nh1_m53t4_f4rt2\'', () => {
      expect(decode('5m1_s2nh1_m53t4_f4rt2')).toBe('uma_senha_muito_forte');
    });
  });
});
