/* let name = "Mike"

console.log(`Hello ${name}`) */

// let a=2;
// let b=5;

// let c=8, d=5;
// console.log(!(a>b))

/* console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log(c%d); */

//Comparison operators
// console.log(a==b);
// console.log(a != b)

// console.log(a > b)
// console.log(a >= b) //in case of, when a and b are equal -> it will return true

// console.log(a < b)
// console.log(a <= b)

let a = 5
let b = '5'

// console.log(a == b) /* it will return true because its only looking for there values, 
// don't look for their data type */
// console.log(a === b) /* it will return false because their data type is different 
// even though there value is same */

// console.log(a != b)
// console.log(a !== b)

//logical operators
let e=3, f=7;

// console.log(e>=2 && f>5)
// console.log(e>2 && f>8)

// console.log(e>2 && e>8)

// console.log(e>2 || f>8)

// console.log(!(e>2 || f>8))

let g = 2, h = 8;

/* if(g>h){
    console.log("g is greater")
}
else if(g<h){
    console.log("h is greater")
}
else{
    console.log("both are equal")
} */


let i=1; //initialization
/* while(i<=5){
    console.log(i);
    i++; //updation
} */

// while(i<=7){
//     console.log(i);
    
//     if(i==4){
//         break;  /* when break condition satisfy, code will 
//         come out from here, further statements written after the break 
//         condition will not execute then*/
//     }
//     i++;
// }

// while(i<=7){
//     console.log(i);
    
//     if(i==4){
//         break;
//     }
//     i++;
// }

// console.log(`to show that the value now is five -> ${i}`)

/* while(i<=7){
    if(i==6){
        break;
    }
    console.log(i);
    i++;
} */


/* for(let j=0; j<=4; j++){
    console.log(j)
} */

//functions

/* function greet(){

}

function greet(){
    console.log("Hello, How are you?")
}

// greet()

for(let k=1; k<=10; k++){
    greet()
} */


function f2(name /*parameter*/){
    console.log("Hello "+name);
}

// f2("Mike")

function f3(name, age) {
    console.log("Hello I am "+name+" and I'm "+age+" years old.");
}
// f3("Abhi", 21)

function f4(name, age){
    console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}
// f4("Paras", 22)

function add(x, y){
    console.log(x + y);
}
// add(4, 5);

function add2(x, y){
    return x+y;
}

// const result = add2(2, 3);
// console.log(result);

// console.log(add2(2, 3));
console.log(`The sum of two given integers is ${add2(2, 3)}`);
//where do you see yourself in next 5 years, tell 2 qualities about yourself and why? ,

//33-204 cabin 11