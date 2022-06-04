// Desafio 10

function techList(array, name) {
  const orderTechArray = array.sort();
  let newTechArray = [];

  if (orderTechArray.length !== 0) {
    for (let tech of orderTechArray) {
      const techObject = { tech, name };
      newTechArray.push(techObject);
    }

    return newTechArray;
  }

  return 'Vazio!';
}

// Desafio 11

function numberRepeat(array, refNumber) {
  let repeat = 0;

  for (let number of array) {
    if (number === refNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

function isInvalidValues(array) {
  const repeatsThreeTimes = (number) => numberRepeat(array, number) >= 3;
  const isGreaterThanNine = (number) => number > 9;
  const isLessThanZero = (number) => number < 0 ;

  for (let number of array) {
    if (isGreaterThanNine(number) || isLessThanZero(number) || repeatsThreeTimes(number)) return true;
  }

  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (isInvalidValues(array)) return 'não é possível gerar um número de telefone com esses valores';

  const ddd = `(${array[0]}${array[1]})`;
  const numPart0 = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const numPart1 = `${array[7]}${array[8]}${array[9]}${array[10]}`;

  return `${ddd} ${numPart0}-${numPart1}`;
}

// Desafio 12

function sideSumValidate(sideA, sideB, sideC) {
  const isFirstSideValid = sideA < (sideB + sideC);
  const isSecondSideValid = sideB < (sideA + sideC);
  const isThirdSideValid = sideC < (sideA + sideB);

  if (isFirstSideValid && isSecondSideValid && isThirdSideValid) {
    return true;
  }

  return false;
}

function sideDifValidate(sideA, sideB, sideC) {
  const isFirstSideValid = sideA > Math.abs(sideB - sideC);
  const isSecondSideValid = sideB > Math.abs(sideA - sideC);
  const isThirdSideValid = sideC > Math.abs(sideB - sideA);

  if (isFirstSideValid && isSecondSideValid && isThirdSideValid) {
    return true;
  }

  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (sideSumValidate(lineA, lineB, lineC) && sideDifValidate(lineA, lineB, lineC)) {
    return true;
  }

  return false;
}

// Desafio 13

function hydrate(string) {
  let waterCupsCounter = 0;
  const consumeArray = string.split(' ');

  for (let value of consumeArray) {
    if (Number(value)) waterCupsCounter += Number(value);
  }

  if (waterCupsCounter === 1) return `${waterCupsCounter} copo de água`;

  return `${waterCupsCounter} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
