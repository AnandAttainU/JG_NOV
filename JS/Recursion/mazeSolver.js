let mat = [
    [0,1,1,1],
    [0,0,0,0],
    [1,0,0,0],
    [1,1,0,0]
];

function mazeSolver(x,y,mat){
    n = mat.length; // number of rows
    m = mat[0].length; // number of columns
    if(x>=n || y >= m) return 0;
    if(mat[x][y] == 1) return 0;
    if(x==n-1 && y == m-1) return 1;

    return mazeSolver(x+1,y, mat) + mazeSolver(x,y+1,mat);
}

console.log(mazeSolver(0,0,mat));