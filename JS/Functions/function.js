// function sum(a, b){
//     console.log(a+b);
// }

// for(i=0; i<5; i++){
//     sum(i, 10);
// }


// function cube(a){
//     console.log(a*a*a);
// }

// function sumOfThree(a,b,c){
//     console.log(a,b,c);
// }

// cube(2);
// cube(3);
// cube(4);

// console.log(sumOfThree(4,44,34));

function plusOne(a){
    return a+1;
}

plusOneExp = function(a){
    return a+1;
}


plusOneArrow = (a) => {
    a = 50;
    return a+1;
}

// When single parameter, we can remove the parenthesis ()
// When there is single line of function -> remove the block {}
// when there is single like of function -> remove the return
plusOneArrow = a => a+1

console.log(plusOne(10));
console.log(plusOneExp(10));
console.log(plusOneArrow(10));


