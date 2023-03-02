class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let node5 = new Node(5);
let node3 = new Node(3);
let node8 = new Node(8);

//    5
//  3   8
node5.left = node3;
node5.right = node8;
let root = node5;

let node15 = new Node(15);
let node7 = new Node(7);
node3.left = node15;
node3.right = node7;

//     5
//   3   8
// 15  7

// Pre -> 5 3 15 7 8

function preOrder(root){ // Root Left Right
    if(root==null) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

function postOrder(root){ // Left Right Root
    if(root==null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

function inOrder(root){ // Left Root Right
    if(root == null) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

preOrder(root);
console.log("--------");
postOrder(root);
console.log("--------");
inOrder(root);
console.log("--------");