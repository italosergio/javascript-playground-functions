// Desafio 1
function compareTrue(a, b) {
  return a && b

}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2;  
  return areaTriangulo
}

// Desafio 3
function splitSentence() {
 
  let palavra = 'go Trybe';

  let nova = '';
  let array = [];
  
   for (i in palavra){
        if (palavra[i] != ' '){
            nova+=palavra[i];
            
          }else {
            array.push(nova);
            nova = ' ';
          }
        }
        array.push(nova);
        return array;
  }
  console.log(splitSentence())
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
