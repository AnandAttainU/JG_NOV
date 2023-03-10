class maxHeap {
    constructor(){
        this.arr = [];
    }

    insert(val){
        if(this.arr.length==0){
            this.arr.push(val);
            return;
        }
        this.arr.push(val);
        let parent = Math.floor((this.arr.length-2)/2);
        if(val>this.arr[parent])
            this.heapifyAdd(this.arr.length-1, parent);
    }

    heapifyAdd(child, parent){
        [this.arr[child], this.arr[parent]] = [this.arr[parent], this.arr[child]];
        let grandParent = Math.floor((parent-1)/2);
        if(this.arr[parent]>this.arr[grandParent]){
            this.heapifyAdd(parent, grandParent);
        }
    }

    print(){
        return this.arr;
    }

    delete(){
        // swap the root with last inserted element
        [this.arr[0], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[0]];
        let deletedItem = this.arr.pop();
        this.heapifyDelete(0);
        return deletedItem;
    }

    heapifyDelete(parent){
        let leftChild = 2*parent + 1;
        let rightChild = 2*parent + 2;
        if(leftChild>=this.arr.length || rightChild>=this.arr.length) return;
        if(this.arr[parent] > this.arr[leftChild] && this.arr[parent] > this.arr[rightChild]) 
            return;
        else if(this.arr[leftChild] > this.arr[rightChild]){ // left child is bigger
            [this.arr[parent], this.arr[leftChild]] = [this.arr[leftChild], this.arr[parent]];
            this.heapifyDelete(leftChild);
        }
        else { // right child is bigger
            [this.arr[parent], this.arr[rightChild]] = [this.arr[rightChild], this.arr[parent]];
            this.heapifyDelete(rightChild);
        }
    }
}

let heap = new maxHeap();
heap.insert(15);
heap.insert(2);
heap.insert(5);
heap.insert(4);
heap.insert(23);
console.log(heap.print());
heap.delete();
console.log(heap.print());