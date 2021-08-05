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
function footballPoints(wins, ties) {
  return pontos = wins*3 + ties*1
}

// Desafio 6
function highestCount(array) {
  
  let mem = Number.NEGATIVE_INFINITY

    for (i of array){
        if( i > mem){
            
            mem = i;
        }
}
let cont = 0

    for (i of array){
        if (mem === i)
        
            cont+=1
    }


return cont
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1%mouse === cat2%mouse){
    
    return 'os gatos trombam e o rato foge'
    
  }else if (cat1-mouse > cat2-mouse){
    
    return 'cat2'
    
  }else if(cat1-mouse < cat2-mouse){
    
    return 'cat1'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = []
     for (i in array){
      
      if (array[i]%5 === 0 && array[i]%3 === 0){
          novoArray.push('fizzBuzz');
      }else if(array[i]%5 === 0){
          novoArray.push('buzz');
      }else if (array[i]%3 === 0){
          novoArray.push('fizz');
      }else{
          novoArray.push("bug!");
      }
      
    }
    return novoArray
  }

// Desafio 9

function encode(string) {

    let numStringArray = []

    for (i of string){
      
      if (i!='a' && i!='e' && i!='i' && i!='o' && i!='u'){
        numStringArray.push(i)
      }else if (i==='a'){
        numStringArray.push('1')
      }else if (i==='e'){
        numStringArray.push('2')
      }else if (i==='i'){
        numStringArray.push('3')
      }else if (i==='o'){
        numStringArray.push('4')
      }else if (i==='u'){
        numStringArray.push('5')
      }
    }

  return numStringArray.join('')
}

  function decode(string) {

    let numStringArray = []

    for (i of string){
      
      if (i!='1' && i!='2' && i!='3' && i!='4' && i!='5'){
        numStringArray.push(i)
      }else if (i==='1'){
        numStringArray.push('a')
      }else if (i==='2'){
        numStringArray.push('e')
      }else if (i==='3'){
        numStringArray.push('i')
      }else if (i==='4'){
        numStringArray.push('o')
      }else if (i==='5'){
        numStringArray.push('u')
      }
    }

    return numStringArray.join('')
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
