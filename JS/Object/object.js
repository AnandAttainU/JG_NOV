// student = {
//     name: "Prince",
//     age: 20,
//     getMarks: function(){
//         return 90;
//     }
// }

// abc = student.getMarks;
// console.log(abc());

// student1 = {
//     name: "Sudhanshu",
//     age: 18,
//     address: "some address"
// }

// // for(key in student1){
// //     console.log(key, student1[key]);
// // }

// a = Object.keys(student1);
// console.log(a);

// val = Object.values(student1);
// console.log(val);

// output
// "Sudhanshu"
// 18
// "some address"


obj1 = {
    a: 10,
    b: 20
}

console.log(obj1);
obj1.c = 50;
console.log(obj1);
obj1.d = function(){console.log(60); return 70;}
console.log(obj1.d());
// instead of undefined -> we want to get 70 as output
// why the undefined is coming?


