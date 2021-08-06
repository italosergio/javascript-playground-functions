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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
let lineA = 5
let lineB = 2
let lineC = 2

function triangleCheck() {

  if (lineA < lineB+lineC && lineB < lineA+lineC && lineC < lineA+lineB){
    return true
  }else{
    return false
  }
}
console.log(triangleCheck())

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
