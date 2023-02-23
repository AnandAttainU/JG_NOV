function reverseString(str){
    // base condition
    if(str.length <= 1) return str;

    // Recursion formula
    return str[str.length-1] + reverseString(str.substr(0,str.length-1));
}

console.log(reverseString("ABCDE"));