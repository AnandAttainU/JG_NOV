let arr = [1,4,3,2,5,8,6,9];



// newArr = arr.filter((i) => i%2==0);

// console.log(arr);
// console.log(newArr);

arr = ["Orange","Orange","banana","apple","apple","banana","apple",
    "apple","apple","apple","Orange","Orange","Orange","Orange","banana"];
orangeCount = (arr2.filter(i => i=="Orange")).length;
appleCount = (arr2.filter(i => i=="apple")).length;
bananaCount = (arr2.filter(i => i=="banana")).length;
obj = {
    "Orange": orangeCount,
    "apple": appleCount,
    "banana": bananaCount
}
console.log(obj);
