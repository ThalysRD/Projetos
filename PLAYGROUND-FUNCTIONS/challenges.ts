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

// Desafio 8
function fizzBuzz(array: Array<number>) {
  let result: Array<string> = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      result.push("fizzBuzz");
    } else if (array[i] % 5 === 0) {
      result.push("buzz");
    } else if (array[i] % 3 === 0) {
      result.push("fizz");
    } else {
      result.push("bug!");
    }
  }

  return result;
}

// Desafio 9
function encode(string: string) {
  let result: string = "";

  string.split(" ");

  for (let i = 0; i < string.length; i += 1) {
    result = string
      .replace(/a/g, "1")
      .replace(/e/g, "2")
      .replace(/i/g, "3")
      .replace(/o/g, "4")
      .replace(/u/g, "5");
  }
  return result;
}

function decode(string: string) {
  let result: string = "";

  for (let i = 0; i < string.length; i += 1) {
    result = string
      .replace(/1/g, "a")
      .replace(/2/g, "e")
      .replace(/3/g, "i")
      .replace(/4/g, "o")
      .replace(/5/g, "u");
  }
  return result;
}

// Desafio 10
function techList(tech: Array<string>, name: string) {
  let obj: Array<object> | string = [];
  let sorted = tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    if (i < tech.length) {
      obj.push({
        tech: sorted[i],
        name: name,
      });
    }
  }
  if (tech === null) {
    obj = "Vazio!";
  }

  return obj;
}
