// Desafio 11
function generatePhoneNumber(array) {
  let arrayx = array.join("")
  let arrayy = []
  let contador = 0
  if (array.length > 11 || array.length < 11) {
    return 'Array com tamanho incorreto.'
}
  for (let i = 0; i < array.length; i += 1) {
  if (array[i] < 0 || array[i] > 9 ) {
    return 'não é possível gerar um número de telefone com esses valores'
  } 
  else{
      for (let y = 0; y < array.length; y +=1) {
      if (array[i] === array[y]) {
      contador += 1
      }
    }
    arrayy.push(contador)
    contador = 0
  }
  if (arrayy[i]>=3) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
}

return "(" + arrayx.slice(0,2) + ") " + arrayx.slice(2,7) + "-" + arrayx.slice(7-11)
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
  hydrate,
  triangleCheck,
};
