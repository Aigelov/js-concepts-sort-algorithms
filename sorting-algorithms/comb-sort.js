const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;

const sortArr = arr => {
  const length = arr.length;
  const factor = 1.247;
  let gapFactor = length / factor;
  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);
    for (let i = 0, j = gap; j < length; i++, j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        counter++;
      }
    }
    gapFactor /= factor;
  }
  return arr;
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`); // 247