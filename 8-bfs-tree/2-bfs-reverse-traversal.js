// Medium
// ============ Binary Tree Level Order Traversal ==============

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


// bfs traversal
function bfsReverse(rootNode){ 
  if(this.rootNode === null) return []; 
   
  let queue = [rootNode]; 
  let stack = []; // 2, 3, 1, 4, 6, 7, 0
  let result = []; 
  
  while(queue.length > 0){
    // shift removes first value from queue
    currentNode = queue.shift(); 
    // add to data
    stack.push(currentNode); 
    // Check the right first
    if(currentNode.right) queue.push(currentNode.right);
    if(currentNode.left) queue.push(currentNode.left);
  }

  while(stack.length) {
    let temp = stack.pop();
    result.push(temp.val);
  }

  return result;
}

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
root.left.left = new Node(0);
root.left.right = new Node(7);
root.right.left = new Node(6);
root.right.right = new Node(4);


console.log(bfsReverse(root))


// time complexity O(n), traversing each node once
// space complexity O(n), using arrays, additional space