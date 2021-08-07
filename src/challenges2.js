// Desafio 10

function techList(array, name) {
  let saveOrdenedArray = array.sort();
  let newArray = [];
  let ans;
  if (saveOrdenedArray.length !== 0) {
    for (let i of saveOrdenedArray) {
      let object = {
        tech: i,
        name,
      };
      newArray.push(object);
    }
    ans = newArray;
  } else {
    ans = 'Vazio!';
  }
  return ans;
}

// Desafio 11

function repeat(array, i) {
  let repetiu = 0;
  for (let j of array) {
    if (j === i) {
      repetiu += 1;
    }
  }
  return repetiu;
}
function repeatCompare(array) {
  let a = false;
  for (let i of array) {
    if (array[i] < 0 || array[i] > 9 || repeat(array, i) >= 3) {
      a = true;
      break;
    }
  }
  return a;
}
function generatePhoneNumber(array) {
  if (array.length === 11) {
    if (repeatCompare(array)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let ddd = `(${array[0]}${array[1]})`;
    let numPart0 = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
    let numPart1 = `${array[7]}${array[8]}${array[9]}${array[10]}`;
    return `${ddd} ${numPart0}-${numPart1}`;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12

function triangleCalcSide(lineA, lineB, lineC) {
  let log = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    log = true;
  }
  return log;
}
function triangleCalcDif(lineA, lineB, lineC) {
  let log = false;
  let a = lineA > Math.abs(lineB - lineC);
  let b = lineB > Math.abs(lineA - lineC);
  let c = lineC > Math.abs(lineB - lineA);
  if (a && b && c) {
    log = true;
  } else {
    log = false;
  }
  return log;
}

function triangleCheck(lineA, lineB, lineC) {
  if (triangleCalcSide(lineA, lineB, lineC) && triangleCalcDif(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

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
