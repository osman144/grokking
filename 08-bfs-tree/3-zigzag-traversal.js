// Medium
// ============ Zigzag Traversal ==============

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
    if(root === null) return []; // validation
    let queue = [root];
    let arr = [];
    let reverse = false;
    while(queue.length > 0){
      let currLevel = [];
      let currLength = queue.length;
      for(let i =0; i<currLength; i++){
        let currNode = queue.shift();
        
        if(reverse){
          currLevel.unshift(currNode.val) // add to beginning
        }else {
          currLevel.push(currNode.val) // add to end
        }
        
        if(currNode.left !== null) queue.push(currNode.left);
        if(currNode.right !== null) queue.push(currNode.right); 
      }
      reverse = !reverse;
      arr.push(currLevel);
    }

    return arr;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


let tree = new Tree();

console.log(tree.bfs(root))

// Time complexity, O(n) node traversal, go through each node atleast once
// Space complexity, O(n) returning array, also queue used