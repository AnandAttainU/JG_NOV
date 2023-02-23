class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(1); // 1->null
let node2 = new Node(4); // 4->null
let node3 = new Node(8); // 8->null
let node4 = new Node(2); // 2->null

// 1->4->8->2->null

node1.next = node2; // 1->4->null
node2.next = node3; // 1->4->8->null
node3.next = node4; // 1->4->8->2->null

console.log(node1.next.next.next.value);




