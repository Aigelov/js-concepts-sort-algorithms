/** Замыкание (Closures)
 * Замыкание это момент когда функция имеет доступ
 * до переменных из выше стоящего скоупа */

// const sayHelloTo = (name) => {
//   const message = `Hello ${name}`;
//   return () => {
//     console.log(message);
//   }
// };
// const helloToElena = sayHelloTo('Elena');
// const helloToJohn = sayHelloTo('John');
// helloToElena();
// helloToJohn();

// function createFrameworkManager() {
//   const fw = ['Angular', 'React'];
//   return {
//     print: () => {
//       console.log(fw.join(' '));
//     },
//     add: (framework) => {
//       fw.push(framework);
//     }
//   }
// }
// const manager = createFrameworkManager();
// manager.print();
// manager.add('VueJS');
// manager.print();

// setTimeout
// const fib = [1, 2, 3, 5, 8, 13];
// for (var i = 0; i < fib.length; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(`Fib: ${j} = ${fib[j]}`);
//     }, 500);
//   })(i)
// }

// setTimeout and delay
const fib = [1, 2, 3, 5, 8, 13];
const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms)
  });
};
const load = async () => {
  for (let i = 0; i < fib.length; i++) {
    console.log(`Fib: ${i} = ${fib[i]}`);
    await delay(500);
  }
};
load();