// Medium
// ============ All Paths ==============
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

  paths(root, sum){
    let allPaths = [];
    this.hasPaths(root, sum, [], allPaths);
    return allPaths;
  }

  hasPaths(currentNode, sum, currentPath, allPaths){
    if(currentNode === null){
      return;
    }

    currentPath.push(currentNode.val);

    if(currentNode.val === sum && currentNode.left === null && currentNode.right === null){
      allPaths.push(currentPath)
    }else{
      this.hasPaths(currentNode.left, sum - currentNode.val, currentPath, allPaths);
      this.hasPaths(currentNode.right, sum - currentNode.val, currentPath, allPaths);
    };

    currentPath.pop();
  }
    
}

let myTree = new Tree();
let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(4);
root.right.left = new Node(10);
root.right.right = new Node (5)

console.log(myTree.paths(root, 23))