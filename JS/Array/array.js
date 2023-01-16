// arr = [1,4,8,12];
// // ind 0 1 2 3

// console.log(arr);


// for(i=0; i<4; i++){ // i=0,1,2,3
//     console.log(arr[i]);
// }

// arr = [1,2,3,4,5,6,7,8,9,10];
// //ind  0 1 2 3 4 5 6 7 8  9
// for(i=0; i<10; i++){ // i=0....9
//     if(i%2!=0){ // i is odd
//         console.log(arr[i]); // print value for odd index
//     }
// }

arr = [1,2,3,4,5,6,7,8,9,10];

for(i=0;i<10;i+=2){
    arr[i] = arr[i+1];
}

console.log(arr);


