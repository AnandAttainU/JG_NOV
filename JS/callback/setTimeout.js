// function add(){
//     console.log("Calling again");
// }

// // setTimeout(add, 5000);


// console.log("1");

// setTimeout(()=>console.log("2"), 4000);
// setTimeout(()=>console.log("4"), 4000);

// console.log("3");


setTimeout(()=>console.log("a"), 3200);
console.log("b");
setInterval(()=>console.log("c"),1000);
setTimeout(()=>console.log("d"),1500);
console.log("e");
