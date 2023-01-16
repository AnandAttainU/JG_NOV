// arr = [1,7,4,2,3,5,8];
// //ind  0 1 2 3 4 5 6

// temp = arr.slice(1,3);

// console.log(temp);
// console.log(arr);
// // 2 3 5 8

arr = [1,7,4,3,2,5,8,7,4,1,2,7];

temp = arr.slice(2,7);
a = temp.slice(1,4);
b = temp.indexOf(5);
c = arr.lastIndexOf(5);
console.log(b,c);

