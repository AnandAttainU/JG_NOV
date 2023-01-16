arr = ["Orange","Orange","banana","apple","apple","banana","apple",
    "apple","apple","apple","Orange","Orange","Orange","Orange","banana"];

orangeCount = 0;
appleCount = 0;
bananaCount = 0;
for(i=0;i<arr.length;i++){
    if(arr[i] == "Orange"){
        orangeCount++;
    }
    else if(arr[i] == "apple"){
        appleCount++;
    }
    else if(arr[i]=="banana"){
        bananaCount++;
    }
}
obj = {
    "Orange": orangeCount,
    "apple": appleCount,
    "banana": bananaCount
}

console.log(obj);