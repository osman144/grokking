// Easy
// ============ Binary Tree Level Order Traversal ==============

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val)
    // is there a root already
    if(this.root === null){
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(currentNode){
      // ignore duplicates
      if(val === currentNode.val) return;

      // go to left if less than current value
      if(val < currentNode.val){
        // if left is null, insert there
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;
        }
        // keep going through the loop
        currentNode = currentNode.left;

      }else if(val > currentNode.val){
        // if right is null, add there
        if(currentNode.right === null){
          currentNode.right = newNode;
          return;
        }
        // keep going through loop
        currentNode = currentNode.right
      } 
    }
  }

  // bfs traversal
  bfs(){    
    let currentNode = this.root; // 2
    let queue = [];
    let data = []; // 2, 1, 3, 0, 4

    if(this.root === null) return data; 

    
    queue.push(currentNode);
    while(queue.length > 0){
      // shift removes first value from queue
      currentNode = queue.shift(); // 3
      // add to data
      data.push(currentNode.val); 
      if(currentNode.left) queue.push(currentNode.left); 
      if(currentNode.right) queue.push(currentNode.right);
    }
    return data;
  }
}

let bst = new BinarySearchTree();

// bst.insert(2);
// bst.insert(1);
// bst.insert(3);
// bst.insert(0)
// bst.insert(4)

console.log(bst.bfs())

// time complexity O(n), traversing each node once
// space complexity O(n), using arrays, additional space