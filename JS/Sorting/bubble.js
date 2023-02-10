let arr = [14,1,7,53,3,8];

function BubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(BubbleSort(arr));