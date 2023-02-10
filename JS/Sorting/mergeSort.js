let arr = [1,7,2,4,9];

function mergeSort(arr, l, r){
    if(l>=r) return;
    let mid = Math.floor((l+r)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);
    merge(arr, l, mid, mid+1, r);
}

function merge(arr, l, mid, nextMid, r){
    let A = [];
    for(let i=l; i<=mid; i++){
        A.push(arr[i]);
    }
    let B = [];
    for(let i=nextMid; i<=r; i++){
        B.push(arr[i]);
    }
    // We are generating arrays A & B

    let p = 0;
    let q = 0;
    let s = l;
    // C = [];
    console.log("A is: ", A);
    console.log("B is: ", B);
    while(p<A.length && q<B.length){
        if(A[p]<=B[q]){
            arr[s] = A[p];
            p++;
        }
        else {
            arr[s] = B[q];
            q++;
        }
        s++;
    }
    while(p<A.length){
        arr[s] = A[p];
        p++;
        s++;
    }
    while(q<B.length){
        arr[s] = B[q];
        q++;
        s++;
    }
    console.log("sorted is:", arr);
}

mergeSort(arr, 0, arr.length-1);
console.log(arr);