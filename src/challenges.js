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
  let novaString = '';
  let array = [];
  for (let i in string) {
    if (string[i] !== ' ') {
      novaString += string[i];
    } else {
      array.push(novaString);
      novaString = '';
    }
  }
  array.push(novaString);
  return array;
}

// Desafio 4

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5

function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6

function highestNumCalc(array) {
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
  let highest = highestNumCalc(array);
  for (let i of array) {
    if (highest === i) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let ans = '';
  if (cat1 % mouse === cat2 % mouse) {
    ans = 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse > cat2 - mouse) {
    ans = 'cat2';
  } else {
    ans = 'cat1';
  }
  return ans;
}

// Desafio 8

function functionIf(i) {
  let ans = '';
  if (i % 5 === 0 && i % 3 === 0) {
    ans = 'fizzBuzz';
  } else if (i % 5 === 0) {
    ans = 'buzz';
  } else if (i % 3 === 0) {
    ans = 'fizz';
  } else {
    ans = 'bug!';
  }
  return ans;
}

function fizzBuzz(array) {
  let newArray = [];
  for (let i of array) {
    newArray.push(functionIf(i));
  }
  return newArray;
}

// Desafio 9

function encode(string) {
  let newString = string;
  let refArray = ['a', 'e', 'i', 'o', 'u'];
  for (let i of string) {
    if (refArray.includes(i)) { // copyrights eric-cruz-plyground-functions | GitHub: Effolex
      newString = newString.replace(i, refArray.indexOf(i) + 1); // copyrights eric-cruz-plyground-functions | GitHub: Effolex
    }
  }
  return newString;
}

function decode(string) {
  let newString = string;
  let refArrayLet = ['a', 'e', 'i', 'o', 'u'];
  let refArrayNum = ['1', '2', '3', '4', '5'];
  for (let i of string) {
    if (refArrayNum.includes(i)) { // copyrights eric-cruz-plyground-functions | GitHub: Effolex
      newString = newString.replace(i, refArrayLet[i - 1]); // copyrights eric-cruz-plyground-functions | GitHub: Effolex
    }
  }
  return newString;
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
