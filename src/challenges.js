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
// let string = 'aeiougqwerigcb'
function encode(string) {
  let nString = string;
  let refArray = ['a', 'e', 'i', 'o', 'u'];
  for (let i of string) {
    if (refArray.includes(i)) { // copyrights eric-cruz-plyground-functions | GitHub: Effolex
      nString = nString.replace(i, refArray.indexOf(i) + 1); // copyrights eric-cruz-plyground-functions | GitHub: Effolex
    }
  }
  return nString;
}
// console.log(encode())

function decode(string) {
  let nString = string;
  let refArray = ['a','e','i','o','u'];
  let refArrayNum = ['1','2','3','4','5']; 
  for (let i of string) {
    if (refArrayNum.includes(i)) { // copyrights eric-cruz-plyground-functions | GitHub: Effolex
      nString = nString.replace(i, refArray[i - 1]); // copyrights eric-cruz-plyground-functions | GitHub: Effolex
    }
  }
  return nString;
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
