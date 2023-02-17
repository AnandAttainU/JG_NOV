class MinStack {
    constructor(){
        this.mainStack = [];
        this.mStack = [];
    }

    push(val) {
        this.mainStack.push(val);
        if(this.mStack.length == 0){ // pushing for the first element
            this.mStack.push(val);
            return;
        }
        
        if(val < this.mStack[this.mStack.length-1]){ // comparing the val with top of mStack
            this.mStack.push(val);
        }
        else 
            this.mStack.push(this.mStack[this.mStack.length-1]);
    };
    
    /**
     * @return {void}
     */
    pop() {
        this.mStack.pop();
        return this.mainStack.pop();
    };
    
    /**
     * @return {number}
     */
    top() {
        return this.mainStack[this.mainStack.length-1];
    };
    
    /**
     * @return {number}
     */
    getMin() {
        return this.mStack[this.mStack.length-1];
    };
}

let m = new MinStack();
m.push(-2);
m.push(0);
m.push(-3);
console.log(m.getMin());
console.log(m.pop());
console.log(m.top());
console.log(m.getMin());
