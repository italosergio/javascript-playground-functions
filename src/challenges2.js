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
function triangleCheck() {
  // seu código aqui
}

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
