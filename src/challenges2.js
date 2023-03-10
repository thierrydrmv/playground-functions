// Desafio 11
function generatePhoneNumber(array) {
  let arrayx = array.join('');
  let arrayy = [];
  let contador = 0;
  if (array.length > 11 || array.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let y = 0; y < array.length; y += 1) {
      if (array[i] === array[y]) {
        contador += 1;
      }
    }
    arrayy.push(contador);
    contador = 0;
    if (arrayy[i] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return '(' + arrayx.slice(0, 2) + ') ' + arrayx.slice(2, 7) + '-' + arrayx.slice(7, 11);
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  } else {
    return true;
  }
}
// Desafio 13
function hydrate(string) {
  let number = /\d+/g;
  let count = 0;
  let beer = string.match(number);
  let arr = JSON.parse('[' + beer + ']');
  for (let i = 0; i < arr.length; i += 1) {
    count = arr[i] + count;
  }
  if (count > 1) {
    return count + ' copos de água';
  }
  {
    return count + ' copo de água';
  }
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
