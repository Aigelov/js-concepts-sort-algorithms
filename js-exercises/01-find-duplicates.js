const arr = [1, 2, 3, 4, 5, 6, 3, 4, 4, 5, 5, 9, 10, 12, 13, 1, 1, 1, 2, 2, 6, 4];
const arr2 = [];

let hasDuplicate = false;
for (let elem of arr) {
  if (arr2.includes(elem)) {
    hasDuplicate = true;
    continue;
  }
  arr2.push(elem);
}
console.log(hasDuplicate);
console.log(arr);
console.log(arr2);