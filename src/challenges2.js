/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 10

function techList(array, name) {
  let nArray = array.sort();
  let mArray = [];
  let resposta;
  if (nArray.length !== 0) {
    for (let i of nArray) {
      let objeto = {
        tech: i,
        name,
      };
      mArray.push(objeto);
    }
    resposta = mArray;
  } else {
    resposta = 'Vazio!';
  }
  return resposta;
}

// Desafio 11
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  if (array.length === 11) {
    for (let i of array) {
      let repetiu = 0;
      for (let j of array) {
        if (j === i) {
          repetiu += 1;
        }
      }
      if (array[i] < 0 || array[i] > 9 || repetiu >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return `(${array[0]}${array[1]})` + ` ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
  return 'Array com tamanho incorreto.';
}
// console.log(generatePhoneNumber())

// Desafio 12
// let lineA = 2
// let lineB = 2
// let lineC = 5

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}
// console.log(triangleCheck())

// Desafio 13
function hydrate(string) {
  let resposta = 0;
  for (let i of string) {
    if (i > 0) {
      resposta += Number(i);
    }
  }
  if (resposta === 1) {
    return `${resposta} copo de água`;
  }
  return `${resposta} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
