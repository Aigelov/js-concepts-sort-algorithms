/** ----- Типы данных ----- */
// number, boolean, string, null, undefined, object, symbol

// console.log(typeof 0); // number
// console.log(typeof true); // boolean
// console.log(typeof 'javascript'); // string
// console.log(typeof undefined); // undefined
// console.log(typeof {}); // object
// console.log(typeof Math); // object
// console.log(typeof Symbol('JS')); // symbol
// console.log(typeof null); // object
// console.log(typeof function() {}); // function
// console.log(typeof NaN); // number

/** ----- Приведение типов ----- */
// let language = 'Javascript';
//
// if (language) {
//   console.log(`The best language is: ${language}`)
// }

// '', 0, null, undefined, NaN, false
// console.log(Boolean('')); // false
// console.log(Boolean('Hello')); // true
// console.log(Boolean(' ')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function() {})); // true

/** ----- Строки и числа ----- */
// console.log(1 + '2'); // string 12
// console.log('1' + 2); // string 12
// console.log('' + 1 + 0); // string 10
// console.log('' - 1); // number -1
// console.log('' - 1 + 5); // number 4
// console.log('3' * 8); // number 24
// console.log('3' * '8'); // number 24
// console.log(4 + 10 + 'px'); // string 14px
// console.log('px' + 5 + 10); // string px510
// console.log('42' - 40); // number 2
// console.log('42px' - 2); // NaN
// console.log(null + 2); // number 2
// console.log(undefined + 42); // NaN
// console.log(undefined - 42); // NaN

/** ----- == vs === -----
 * == (двойное равно) сравнивает значения, но с приведением типов */
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false); // true
// console.log('0' == 0); // true
// console.log(0 == 0); // true

// console.log();
// console.log(Boolean(false), Boolean(''), false == ''); // false false true
// console.log(Boolean(false), Boolean([]), false == []); // false true true
// console.log(Boolean(false), Boolean({}), false == {}); // false true false
// console.log();
// console.log(Boolean(''), Boolean(0), '' == 0); // false false true
// console.log(Boolean(''), Boolean([]), '' == []); // false true true
// console.log(Boolean(''), Boolean({}), '' == {}); // false true false
// console.log();
console.log(Boolean(0), Boolean([]), 0 == []); // false true true
console.log(Boolean('0'), Boolean([]), '0' == []); // true true false
console.log(Boolean(0), Boolean({}), 0 == {}); // false true false
console.log(Boolean(0), Boolean(null), 0 == null); // false false false
