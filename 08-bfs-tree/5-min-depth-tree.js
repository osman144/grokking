// Easy
// ============ Minimum Depth of a Binary Tree ==============

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
    if(root === null) return 0;
    let queue = [root];
    let minDepth = 0; 

    while(queue.length > 0){
      minDepth = minDepth + 1;
      let levelSize = queue.length;
      for(let i=0; i<levelSize; i++){
        let currNode = queue.shift(); // 1

        // check if leaf node
        if(currNode.left === null && currNode.right === null){
          return minDepth;
        }

        if(currNode.left !== null) queue.push(currNode.left);
        if(currNode.right !== null) queue.push(currNode.right);
      }
    }
    return minDepth;
  }
}


let root = new Node(1);
root.left = new Node(2);
root.left = new Node(4);
root.right = new Node(3);
root.left.right = new Node(5);


let myTree = new Tree();

console.log(myTree.bfs(root));