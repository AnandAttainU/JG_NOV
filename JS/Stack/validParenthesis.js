class Stack {
    constructor(){
        this.arr = [];
    }
    push(item){
        this.arr.push(item); // O(1)
    }
    pop(){
        return this.arr.pop(); // O(1)
    }
    peek(){
        return this.arr[this.arr.length - 1]; // O(1)
    }
    isEmpty(){
        return this.arr.length == 0; // O(1)
    }
}

function validParenthesis(str){
    let st = new Stack();
    for(let i=0; i<str.length; i++){
        if(str[i]=="("){
            st.push('(');
        }
        else{
            if(st.isEmpty) return false;
            st.pop();
        }
    }
    return st.isEmpty();
}

console.log(validParenthesis(")()")); // T