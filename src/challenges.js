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
  if(cat1-mouse===mouse-cat2 || cat2-mouse===mouse-cat1 || cat2===cat1) {
    return "os gatos trombam e o rato foge"
  }
  else if (cat1>cat2>mouse || cat1+mouse>cat2+mouse) {
    return "cat2"
  }
  else if(cat2>cat1>mouse || cat2+mouse>cat1+mouse) {
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let strings = []
  for(let i = 0; i<array.length; i+=1) {
    if (array[i]%3===0 && array[i]%5===0){
      strings.push("fizzBuzz")
    }
    else if(array[i]%5===0) {
      strings.push("buzz")
    }
    else if (array[i]%3===0){
      strings.push("fizz")
    }
    else {
      strings.push("bug!")
    }
}
return strings
}
fizzBuzz([9, 25])
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
