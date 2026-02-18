// object in js
//


const Student = {
    name:"Mike",
    age:21
}

/*
console.log(Student)
console.log(Student.name)

//added a new key-value pair
Student.city = "NYC"
console.log(Student) */

//spread operator
const obj = {...Student, city: "Chicago"}
console.log(obj)