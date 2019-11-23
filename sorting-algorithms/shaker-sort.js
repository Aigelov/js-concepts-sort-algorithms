const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;

const sortArr = (arr) => {
  let stopIteration = false;
  let whileCounter = 0;
  while (!stopIteration) {
    let isSorted = true;
    for (let i = whileCounter; i < arr.length - 2; i++) {
      counter++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }

    for (let i = arr.length - whileCounter - 1; i > 0; i--) {
      counter++;
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        isSorted = false;
      }
    }

    if (isSorted) {
      stopIteration = true;
    }
  }
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`);