arr = [1,10,4,11,10,5];

arr.sort();
console.log(arr);

arr.sort((a,b) => a-b);
console.log(arr);
arr.sort((a,b) => b-a);
console.log(arr);
