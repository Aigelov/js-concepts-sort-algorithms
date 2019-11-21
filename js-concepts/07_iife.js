/** Immediately Invoked Function Expression
 * Самовызывающиеся функции */
let result = [];
for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    result.push(() => {console.log(j)});
  })();
}
result[2]();
result[3]();