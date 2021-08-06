// Desafio 10

function techList(array, name) {
  let nArray = array.sort()
  let mArray = []

  if(nArray.length !== 0){
    
    for (let i of nArray){

      let objeto = {
        tech: i,
        name: name
      }
        mArray.push(objeto)
    }
    return mArray
  }else{
    return 'Vazio!'
  }
}

// Desafio 11
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
function generatePhoneNumber(array) {
 
  if (array.length === 11){
    return true
  }else{
    return "Array com tamanho incorreto."
  }
}
console.log(generatePhoneNumber())

// Desafio 12
// let lineA = 2
// let lineB = 2
// let lineC = 5 

function triangleCheck(lineA, lineB, lineC) {

  if (lineA < lineB+lineC && lineB < lineA+lineC && lineC < lineA+lineB && lineA>Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineB-lineA)){
    return true
  }else{
    return false
  }
}
// console.log(triangleCheck())

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
