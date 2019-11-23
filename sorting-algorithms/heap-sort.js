const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;

const sortArr = (arr) => {
  if (arr.length == 0) {
    return [];
  }
  let n = arr.length;
  let i = Math.floor(n/2);
  let j;
  let k;
  let t;

  while (true) {
    if (i > 0) {
      t = arr[--i];
    } else {
      n--;
      if (n == 0) {
        return arr;
      }
      t = arr[n];
      arr[n] = arr[0];
    }
    j = i;
    k = j * 2 + 1;
    while (k < n){
      counter++;
      if (k + 1 < n && arr[k + 1] > arr[k]) {
        k++;
      }
      if (arr[k] > t) {
        arr[j] = arr[k];
        j = k;
        k = j * 2 + 1;
      }
      else {
        break;
      }
    }
    arr[j] = t;
  }
};
sortArr(arr);
console.log(arr);
console.log(`Array length: ${arr.length}`);
console.log(`${counter} iterations`);