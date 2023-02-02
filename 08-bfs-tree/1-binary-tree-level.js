// Easy
// ============ Binary Tree Level Order Traversal ==============
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  bfs(root){
    if(root === null) return [];
    let arr = [];
    let queue = [root];

    while(queue.length > 0){
      let temp = [];
      let levelSize = queue.length;
      for(let i=0; i<levelSize;i++){
        let curr = queue.shift();
        temp.push(curr.val); // [1]
        if(curr.left !== null) queue.push(curr.left);
        if(curr.right !== null) queue.push(curr.right);
      }

      arr.push(temp);
    }

    return arr;
  }
}


let myTree = new Tree()

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(myTree.bfs(root))

// time complexity O(n), traversing each node once
// space complexity O(n), using arrays, additional space