const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;
let delta = Math.ceil(arr.length / 2);

const sortArr = (arr) => {
  let stopIteration = true;
  while (stopIteration) {
    let isSorted = true;
    for (let i = 0; i < arr.length - delta; i++) {
      counter++;
      if (arr[i] > arr[i + delta]) {
        [arr[i], arr[i + delta]] = [arr[i + delta], arr[i]];
        isSorted = false;
      }
    }

    if (delta > 1) {
      delta--;
    }

    if (isSorted) {
      isSorted = isSortedFn(arr);
    }

    if (isSorted) {
      stopIteration = false;
    }
  }
};
const isSortedFn = (arr) => {
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`); // 247