const arr = require('./generate-random-numbers').randomNumbers;
let counter = 0;

// Для начала создадим функцию, которая будет отвечать за
// вторую часть алгоритма — слияние двух отдельных уже
// отсортированных массивов в порядке возрастания их элементов
const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = 0;
  let j = 0;
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(
      (arrFirst[i] < arrSecond[j]) ?
        arrFirst[i++] : arrSecond[j++]
    );
    counter++;
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [
    ...arrSort,
    ...arrFirst.slice(i),
    ...arrSecond.slice(j)
  ];
};

const mergeSort = arr => {
  // Проверяем корректность переданных данных
  if (!arr || !arr.length) {
    return null;
  }
  //Если массив содержит один элемент просто возвращаем его
  if (arr.length <= 1) {
    return arr;
  }
  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const mergedArr = mergeSort(arr);
console.log(`Array length: ${mergedArr.length}`);
console.log(mergedArr);
console.log(`${counter} iterations`);