// var arr = [1,6,9,4];

// // var p = arr[0];
// // var s = arr[3];

// let [p,q,,s] = arr;

// console.log(p,s);


// Ques
arr = [1,6,2,5,4];

// output => 1 5 4 via destructuring
let [p,...r] = [...arr];

console.log(p,r);
