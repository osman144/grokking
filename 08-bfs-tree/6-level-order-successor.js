// Easy
// ============ Level Order Successor ==============

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){}

  bfs(root, givenVal){
    if(root === null) return null;
    let queue = [root];
    while(queue.length > 0){
      let currNode = queue.shift();
      if(currNode.val === givenVal) break; // break out of while loop
      if(currNode.left !== null) queue.push(currNode.left);
      if(currNode.right !== null) queue.push(currNode.right);
    }

    if(queue.length > 0){
      return queue[0].val;
    }

    return null;
  }
}

let myTree = new Tree();

let root = new Node(12);
root.left = new Node(7);
root.left.left = new Node(9);
root.right = new Node(1);
root.right.left = new Node(10);
root.right.right = new Node(5);


console.log(myTree.bfs(root, 9))

// Time complexity is O(n)
// Space is O(n)