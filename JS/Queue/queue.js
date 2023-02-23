class Queue {
    constructor(){
        this.arr = [];
    }
    enqueue(item){
        this.arr.push(item);
    }
    dequeue(){
        return this.arr.shift();
    }
    isEmpty(){
        return this.arr.length==0;
    }
}

let q = new Queue();
// q = {arr: [], enqueu():fn body, dequeu(): fn body, isEmppty(): fn body}
q.enqueue(12);
q.enqueue(122);
console.log(q.dequeue());
