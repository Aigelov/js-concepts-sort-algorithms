const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;

const sortArr = (arr) => {
  let stopIteration = true;
  while (stopIteration) {
    let isNotSorted = true;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
        counter++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isNotSorted = false;
      }
    }
    if (isNotSorted) {
      stopIteration = false;
    }
  }
};
sortArr(arr);
console.log(`Array length: ${arr.length}`);
console.log(arr);
console.log(`${counter} iterations`);