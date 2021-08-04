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
function splitSentence(string) {
    
  let nova = '';
  let array = [];
  
   for (i in string){

      if (string[i] !== ' '){
            nova+=string[i];
            
      }else {
          array.push(nova);
          nova = '';

        }
    }
array.push(nova);
return array;
}
// Desafio 4
function concatName(array) {
  
  return novaArray = array[array.length-1] +', '+ array[0]
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
