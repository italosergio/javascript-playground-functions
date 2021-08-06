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
