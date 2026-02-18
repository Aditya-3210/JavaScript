//difference between var, let and const

// let a=10
// var a=10

// const a=10 no redeclare and no update

// let, in let we can update but don't redeclare

/*
let a=10
function f1(){
    let a =20
    console.log(a) //local to this func, no error will come
}
f1()
console.log(a) //outside variable */

/*
let a=10
function f1(){
    let a =20
    if(3>1){
        let a=30
        console.log(a) //no error will come, because this 30
    }
    console.log(a)
}
f1()
console.log(a) //outside variable

//block scope variable --let, must be unique inside a block */


//
/* var a=10
function f1(){
    var a =20
    if(3>1){
        var a=30
        console.log(a)
    }
    console.log(a)
}
f1()
console.log(a) */

//let is block level/scope, var is function level

//variables names rules