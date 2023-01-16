// let a = 10;
// Global -> a
// functional -> a,b,c,d
// local/block -> if block -> c,d 
//                function block -> a,b

// let, const -> block scope
// var -> function scope
// function add(){
//     let a = 100;
//     var b = 200;
//     if(a<1000){
//         let c = 20;
//         var d = 30;
//         console.log(a,b,c,d);
//     }
//     console.log(a,b,c,d);
// }
// console.log(a,b,c,d);

// var a = 100;
// if(true){
//     var a = 10;
//     console.log(a);
// }
// console.log(a);

// var a = 100;

// function add(){
//     var a = 10;
//     console.log(a);
// }
// add();
// console.log(a);


function add(){
    let a = 100;
    if(true){
        var b = 10;
        const c = 11;
    }
    console.log(a,b,c);
}
add();
