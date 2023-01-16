// let a = require("prompt-sync")()("Enter value ");
// console.log("found value:", a);

//Q1 WAP to find if a number from user is even of odd?
// let a = Number(require("prompt-sync")()("Enter value in number "));
// let str = require("prompt-sync")()("Enter value in string ");
let b = Boolean(require("prompt-sync")()("Enter value in boolean "))
console.log(b);

// "" -> false
// "0" -> true
// all other string -> true
// 0 -> false
// all other number -> true

// if(a%2==0){
//     console.log("Number is even");
// }else {
//     console.log("Number is odd");
// }