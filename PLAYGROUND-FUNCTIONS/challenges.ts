// Desafio 1
function compareTrue(value1: boolean, value2: boolean) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(height: number, weight: number) {
  return (height * weight) / 2;
}

// Desafio 3
function splitSentence(value: string) {
  return value.split(" ");
}

 // Desafio 4
 function concatName(array: Array<string>) {
    return `${array[array.length - 1]}, ${array[0]}`;
  }
  
  // Desafio 5
  function footballPoints(wins: number, tie: number) {
    return wins * 3 + tie;
  }
  
  // Desafio 6
  function highestCount(array: Array<number>) {
    let numMax = 0;
    let count = 0;
  
    for (let i = 0; i < array.length; i += 1) {
      if (Math.abs(array[i]) >= numMax) {
        numMax = array[i];
      }
    }
  
    for (let i = 0; i < array.length; i += 1) {
      if (numMax === array[i]) {
        count += 1;
      }
    }
  
    return count;
  }
  
  // // Desafio 7
  function catAndMouse(mouse: number, cat1: number, cat2: number) {
    const d1 = Math.abs(mouse - cat1);
    const d2 = Math.abs(mouse - cat2);
    if (d1 > d2) {
      return "cat2";
    } else if (d1 < d2) {
      return "cat1";
    }
    return "os gatos trombam e o rato foge";
  }
  
 