// Easy
// ============ Max Depth of a Binary Tree ==============

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){}

  bfs(root){
    if(root === null) return 0;
    let maxLevel = 0;
    let queue = [root];

    while(queue.length > 0){
      maxLevel = maxLevel + 1
      let currLength = queue.length;
      for(let i=0; i<currLength; i++){
        let currNode = queue.shift(); 

        if(currNode.left !== null) queue.push(currNode.left);
        if(currNode.right !== null) queue.push(currNode.right);
      };
    }

    return maxLevel;
  }
}

let tree = new Tree();
let root = new Node(1);

root.left = new Node(2);
root.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);

console.log(tree.bfs(root));