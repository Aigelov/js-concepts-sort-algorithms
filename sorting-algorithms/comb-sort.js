let arr = [
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1,
  92, 16, 27, 67, 56, 10, 52, 33, 44, 23, 8, 9, 1
];
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
      stopIteration = false;
    }
  }
};
console.log(`Array length: ${arr.length}`);
sortArr(arr);
console.log(arr);
console.log(`${counter} iterations`);