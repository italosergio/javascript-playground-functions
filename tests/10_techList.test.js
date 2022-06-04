const { techList } = require('../src/challenges2');

const techListArray1 = ['JavaScript', 'Typescript', 'ReactJs', 'NodeJs', 'Sequelize'];
const techListArray2 = ['Java', 'Minecraft', 'MongoDb', 'NextJs', 'Saas'];

const response1 = [
  {
    tech: 'JavaScript',
    name: 'Italo',
  },
  {
    tech: 'NodeJs',
    name: 'Italo',
  },
  {
    tech: 'ReactJs',
    name: 'Italo',
  },
  {
    tech: 'Sequelize',
    name: 'Italo',
  },
  {
    tech: 'Typescript',
    name: 'Italo',
  },
];

const response2 = [
  {
    tech: 'Java',
    name: 'Romeo',
  },
  {
    tech: 'Minecraft',
    name: 'Romeo',
  },
  {
    tech: 'MongoDb',
    name: 'Romeo',
  },
  {
    tech: 'NextJs',
    name: 'Romeo',
  },
  {
    tech: 'Saas',
    name: 'Romeo',
  },
];

describe('10 - Crie uma função de Lista de tecnologias', () => {
  it('Retorna uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias e o nome \'Romeo\'', () => {
    expect(techList(techListArray2, 'Romeo')).toEqual(response2);
  });

  it('Retorna uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias e o nome \'Italo\'', () => {
    expect(techList(techListArray1, 'Italo')).toEqual(response1);
  });
  
  it('Retorne \'Vazio!\' quando a lista estiver vazia', () => {
    expect(techList([], 'Italo')).toBe('Vazio!');
  });
});
