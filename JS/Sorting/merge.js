let A = [4,7,9,11];
let B = [1,5,10,11,18,20,22];

function merge(A, B){
    let C = [];
    let p = 0;
    let q = 0;
    while(p<A.length && q<B.length){
        if(A[p]<=B[q]){
            C.push(A[p]);
            p++;
        }
        else {
            C.push(B[q]);
            q++;
        }
    }
    while(p<A.length){
        C.push(A[p]);
        p++;
    }
    while(q<B.length){
        C.push(B[q]);
        q++;
    }
    return C;
}

console.log(merge(A, B));