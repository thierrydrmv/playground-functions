// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2
  return value
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array
}

// Desafio 4
function concatName(arrayString) {
  let firstName;
  let lastName;
  let index;
  for (let i=0; i<arrayString.length; i+=1) {
    firstName = arrayString[0] 
    index = arrayString.length -1
    lastName = arrayString[index]
  }
  return lastName+", "+ firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  let answer = (wins * 3) + ties
  return answer
}

// Desafio 6
function highestCount(numbers) {
  let howMuch = 0;
  let bigger = Math.max(...numbers)
  for(let i=0;i<numbers.length; i+=1) {
    if (numbers[i] === bigger) {
      howMuch += 1
    }
    }
    return howMuch
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1>cat2 && cat1> mouse) {
    return cat2
  }
  else if(cat2>cat1 && cat2> mouse) {
    return cat1
  }
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

// Desafio 10
function techList() {
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
  techList,
};
