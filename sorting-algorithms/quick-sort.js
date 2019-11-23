const items = require('./generate-random-numbers').randomNumbers;
let counter = 0;

partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      counter++;
      i++;
    }
    while (items[j] > pivot) {
      counter++;
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }
  return i;
};

quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
};

// first call to quick sort
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);
console.log(`${counter} iterations`);