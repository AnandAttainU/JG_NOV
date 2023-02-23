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
    size(){
        return this.arr.length;
    }
    findEle(k){
        return this.arr[k];
    }
}

function solve(a, b, k){
    let q = [];
    q.push(a);
    q.push(b);
    console.log(q);
    let i=0;
    while(q.length<=k){
        let temp = q[i];
        i++;
        q.push(temp*10 + a);
        q.push(temp*10 + b);
        console.log(q);
    }
    return q[k];
}

console.log(solve(1,2,4));
