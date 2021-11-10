const myArray = [1,2,3,4]
// Map(): Create a new array, but don't make changes to origin object.

// const a= myArray.map(a => 'b')

// console.log(a, myArray);

// filter(): Return a new array that satifies the condition.

// const b = myArray.filter(a=> a < 10)
// console.log(b);

// Includes();

// async/ await
// fetch('https://jsonplaceholder.typicode.com/posts').then(
//   response => {
//     return response.json()
//   }
// ).then((data)=>{
//   console.log(data);
// })

// Find()
// const a = myArray.find(el => el >= 3)
// console.log(typeof a);

// Reduce()

// const sum = myArray.reduce((accumulator, currentElement)=>accumulator+ currentElement, 10)
// console.log(sum);

// Memoization
// let cache = {};

// function memoizedAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log('long time');
//     cache[n] = n + 80
//     return cache[n]
//   }
// }

// Currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a)=>(b)=> a * b;

// console.log(multiply(2, 3));
// let b = curriedMultiply(2);
// console.log(b(4));

// document.addEventListener("DOMContentLoaded", ()=>{
//     alert('Nguyen Duy Tra!')
// });

// alert("Library loaded, inline script executed");
window.onbeforeunload = function() {
    return false;
  };