class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtLast(val){
        let node = new Node(val);
        if(this.head==null)
            this.head = node;
        else{
            let cur = this.head;
            while(cur.next!=null){
                cur = cur.next;
            }
            cur.next = node;
        }
    }

    insertAtBegin(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    printAllNodes(){
        let cur = this.head;
        while(cur!=null){
            console.log(cur.value);
            cur=cur.next;
        }
    }

    DeleteFromBegin(){
        this.head = this.head.next;
    }

    DeleteFromEnd(){
        let cur = this.head;
        while(cur.next.next!=null){
            cur = cur.next;
        }
        cur.next = null;
    }
}

let LL = new LinkedList();
LL.insertAtLast(4);
LL.insertAtLast(5);
LL.insertAtLast(3);
LL.insertAtBegin(10);
LL.printAllNodes();
console.log("-------");
LL.DeleteFromBegin();
LL.printAllNodes();
console.log("-------");
LL.DeleteFromEnd();
LL.printAllNodes();
