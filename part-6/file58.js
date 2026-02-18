x = 10
console.log(x) //no error

"use strict"
// x = 10 //now error will come due to this
// console.log(x)

//we are required to use let in strict mode

// another example
function add(a, a){
    console.log(a+a);
}
// add(6, 5);