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

let st = new Stack();
// st.push(5);
// st.push(6);
// st.push(1);
// console.log(st.pop());
// console.log(st.pop());
// console.log(st.peek());
// st.push(8);
// console.log(st.pop());
// console.log(st.isEmpty());

st.push(11);
st.push(0);
console.log(st.pop());
console.log(st.peek());
console.log(st.pop());
st.push(8);
console.log(st.pop());
console.log(st.isEmpty());
