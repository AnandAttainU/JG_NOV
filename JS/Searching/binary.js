arr = [1,5,9,12,23,35,45,99,102];

target = 15;

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]==target) return true;
        else if(arr[mid] < target) // target is on the right side
            start = mid+1;
        else if(arr[mid] > target) // target is on left side
            end = mid-1;
    }
    return false;
}

console.log(binarySearch(arr,target))