// let arr = [
//   92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1
// ];
let arr = [
  16, 27, 67, 56, 10, 52, 33
];
let counter = 0;
let middle = Math.floor(arr.length / 2);
console.log(middle);

const sortArr = (arr) => {
  let stopIteration = true;
  while (stopIteration) {
    let i;
    let j;
    let isSorted = true;
    for (i = 0; i < arr.length - middle; i++) {
      counter++;
      if (arr[i] > arr[middle]) {
        break;
      }
    }

    for (j = arr.length - 1; j >= middle; j--) {
      counter++;
      if (arr[j] < arr[middle]) {
        break;
      }
    }

    if (i !== j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      isSorted = false;
    }
    console.log(i, j);

    if (counter > 4) {
      stopIteration = false;
    }
  }
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`);