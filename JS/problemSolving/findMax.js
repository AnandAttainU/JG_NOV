// let arr = [1,-7,122,23,8,51,0];

// // Write a function to return the maximum from array parameter
function getMaxArray(arr){
    let maxVal = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxVal){
            maxVal = arr[i];
        }
    }
    return maxVal;
}

// console.log(getMaxArray(arr));

// function maxFromMatrix(mat){
//     let maxVal = mat[0][0];
//     for(let i=0; i<mat.length; i++){
//         for(let j=0; j<mat[0].length; j++){
//             if(mat[i][j] > maxVal){
//                 maxVal = mat[i][j];
//             }
//         }
//     }
//     return maxVal;
// }

// console.log(maxFromMatrix(mat));

// finding maximum hourglass sum -> hackerrank

mat = [
        [1,1,1,1,1,1],
        [0,1,0,0,0,0],
        [1,1,1,0,0,0],
        [0,0,0,2,1,4],
        [0,0,0,0,1,0],
        [0,0,0,3,5,1]
    ]

function findMaxHourglassSum(mat){
    let maxSum = 0;
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            // mat[i][j] -> starting point of hourglass
            let sum = 0;
            sum += mat[i][j] + mat[i][j+1] + mat[i][j+2];
            sum += mat[i+1][j+1];
            sum += mat[i+2][j] + mat[i+2][j+1] + mat[i+2][j+2];
            if(sum > maxSum) maxSum = sum;
        }
    }
    return maxSum;
}

console.log(findMaxHourglassSum(mat));



