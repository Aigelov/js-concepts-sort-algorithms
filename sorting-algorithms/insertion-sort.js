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
let newArr = [];
let counter = 0;

const sortArr = (arr) => {
  let stopIteration = true;
  newArr.push(arr[0]);
  while (stopIteration) {
    let isSorted = true;
    for (let i = 1; i < arr.length; i++) {
      for (let j = newArr.length - 1; j >= 0; j--) {
        counter++;
        if (arr[i] < newArr[j]) {
          if (arr[i] < newArr[j - 1]) {
          } else {
            newArr.splice(j, 0, arr[i]);
            isSorted = false;
          }
        }
      }
    }
    if (isSorted = true) {
      stopIteration = false;
    }
  }
};
sortArr(arr);
console.log(`Array length: ${newArr.length}`);
console.log(newArr);
console.log(`${counter} iterations`);