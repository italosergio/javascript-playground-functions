// Desafio 1

function compareTrue(a, b) {
  const firstValueExist = a;
  const secondValueExist = b;

  const areBothValuesDefined = firstValueExist && secondValueExist;

  return areBothValuesDefined;
  // Or simply return a && b;
}

// Desafio 2

function calcArea(base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3

function splitSentence(string) {
  let concatStrings = '';
  let arrayOfWords = [];

  for(let letter of string) {
    if(letter !== ' ') {
      concatStrings += letter;
    } else {
      arrayOfWords.push(concatStrings);
      concatStrings = '';
    }
  }
  arrayOfWords.push(concatStrings);

  return arrayOfWords;
}

// Desafio 4

function concatName(array) {
  const sentenceArray = array;
  const lastIndex = sentenceArray.length - 1;
  const firstIndex = 0;
  let newSentence = '';

  for(let wordIndex = lastIndex; wordIndex >= 0; wordIndex-=1) {
    if(wordIndex === lastIndex) {
      newSentence = `${sentenceArray[wordIndex]}, `;
    } else if(wordIndex === firstIndex) {
      newSentence += sentenceArray[wordIndex]
    }
  }

  return newSentence;
  // Or not using primitive types, simply return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 5

function footballPoints(wins, draws) {
  const victoryPoints = wins * 3;
  const drawPoints = draws * 1;
  const totalPoints = victoryPoints + drawPoints;
  
  return totalPoints;
}

// Desafio 6

function highestCount(array) {

  function highestNumCalc(numberArray) {
    let highestNumber = numberArray[0];
    for(let currentValue of numberArray) {
      if(currentValue > highestNumber) {
        highestNumber = currentValue;
      }
    }
    return highestNumber;
  }

  let highestNumberCounter = 0;
  const highestNumber = highestNumCalc(array);
  for(let currentValue of array) {
    if(highestNumber === currentValue) {
      highestNumberCounter += 1;
    }
  }
  return highestNumberCounter;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  const cat1ToMouseDistance = Math.abs(cat1 - mouse);
  const cat2ToMouseDistance = Math.abs(cat2 - mouse);

  if(cat1ToMouseDistance < cat2ToMouseDistance) return 'cat1';
  if(cat1ToMouseDistance > cat2ToMouseDistance) return 'cat2';
  
  return "os gatos trombam e o rato foge";
}

// Desafio 8

function fizzBuzz(array) {
  function defineFizzBuzzOrBug(number) {
    const inputNumber = number;
  
    const isDivisibleByFive = !(inputNumber % 5);
    const isDivisibleByThree = !(inputNumber % 3);
  
    if(isDivisibleByFive && isDivisibleByThree) {
      return 'fizzBuzz';
    } else if(isDivisibleByFive) {
      return 'buzz';
    } else if(isDivisibleByThree) {
      return 'fizz';
    }
    return 'bug!';
  }

  let fizzBuzzBugArray = [];

  for(let value of array) {
    fizzBuzzBugArray.push(defineFizzBuzzOrBug(value));
  }
  return fizzBuzzBugArray;
}

// Desafio 9

function encode(string) {
  let encodedString = '';

  for (let value of string) {
    switch (value) {
      case 'a':
        encodedString += '1';
        break;
      case 'e':
        encodedString += '2';
        break;
      case 'i':
        encodedString += '3';
        break;
      case 'o':
        encodedString += '4';
        break;
      case 'u':
        encodedString += '5';
        break;
      default:
        encodedString += value;
        break;
    }
  }
  return encodedString;
}

function decode(string) {
  let decodedString = '';

  for (let value of string) {
    switch (value) {
      case '1':
        decodedString += 'a';
        break;
      case '2':
        decodedString += 'e';
        break;
      case '3':
        decodedString += 'i';
        break;
      case '4':
        decodedString += 'o';
        break;
      case '5':
        decodedString += 'u';
        break;
      default:
        decodedString += value;
        break;
    }
  }

  return decodedString;
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
