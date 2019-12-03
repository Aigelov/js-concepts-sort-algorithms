const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;
const sortArr = (arr) => {
  let isSorted = false;
  let iterator = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = iterator; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
        counter++;
      }
    }

    for (let j = arr.length - iterator - 1; j >= iterator; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
        counter++;
      }
    }
    iterator++;
  }
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`);