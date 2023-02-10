arr = [5,1,3,7,9];
target = 13;

function searching(arr, target){
    for(let i=0; i<arr.length; i++){
        if(target == arr[i]){
            return true;
        }
    }
    return false;
}

console.log(searching(arr, target));