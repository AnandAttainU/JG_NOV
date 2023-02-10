mat = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,12,14]
    ]

let rows = mat.length;
let columns = mat[0].length;

for(let i=0; i<rows; i++){
    let str = ""
    for(let j=0; j<columns; j++){
        str += mat[i][j] + " ";
    }
    console.log(str);
}