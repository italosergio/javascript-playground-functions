/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let nova = '';
  let array = [];
  for (let i in string) {
    if (string[i] !== ' ') {
      nova += string[i];
    } else {
      array.push(nova);
      nova = '';
    }
  }
  array.push(nova);
  return array;
}
// Desafio 4
function concatName(array) {
  let a = array.length - 1;
  let b = array[a];
  b += ', ';
  b += array[0];
  return b;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function mNumCalc(array) {
  let mem = array[0];
  for (let i of array) {
    if (i > mem) {
      mem = i;
    }
  }
  return mem;
}

function highestCount(array) {
  let cont = 0;
  let maior = mNumCalc(array);
  for (let i of array) {
    if (maior === i) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = '';
  if (cat1 % mouse === cat2 % mouse) {
    resposta = 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse > cat2 - mouse) {
    resposta = 'cat2';
  } else {
    resposta = 'cat1';
  }
  return resposta;
}

// Desafio 8
function functionIf(i) {
  let resposta = '';
  if (i % 5 === 0 && i % 3 === 0) {
    resposta = 'fizzBuzz';
  } else if (i % 5 === 0) {
    resposta = 'buzz';
  } else if (i % 3 === 0) {
    resposta = 'fizz';
  } else {
    resposta = 'bug!';
  }
  return resposta;
}
function fizzBuzz(array) {
  let novoArray = [];
  for (let i of array) {
    novoArray.push(functionIf(i));
  }
  return novoArray;
}

// Desafio 9

function encode(string) {
  let numStringArray = [];
  for (i of string) {
    if (i !== 'a' && i !== 'e' && i !== 'i' && i !== 'o' && i !== 'u') {
      numStringArray.push(i);
    } else if (i === 'a') {
      numStringArray.push('1');
    } else if (i === 'e') {
      numStringArray.push('2');
    } else if (i === 'i') {
      numStringArray.push('3');
    } else if (i === 'o') {
      numStringArray.push('4');
    } else if (i === 'u') {
      numStringArray.push('5');
    }
  }

  return numStringArray.join('');
}

function decode(string) {
  let numStringArray = [];

  for (i of string) {
    if (i !== '1' && i !== '2' && i !== '3' && i !== '4' && i !== '5') {
      numStringArray.push(i);
    } else if (i === '1') {
      numStringArray.push('a');
    } else if (i === '2') {
      numStringArray.push('e');
    } else if (i === '3') {
      numStringArray.push('i');
    } else if (i === '4') {
      numStringArray.push('o');
    } else if (i === '5') {
      numStringArray.push('u');
    }
  }

  return numStringArray.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
