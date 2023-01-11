// Easy
// ============ Path Sum ==============


class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  hasPath(node, sum){
    if(node === null) return false;
    if(node.val === sum && node.left === null && node.right === null) return true;

    return this.hasPath(node.left, sum - node.val) || this.hasPath(node.right, sum - node.val);
  }

}

let myTree = new Tree();
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(myTree.hasPath(root, 11))

// Time complexity O(n) time 
// Where 'N' is the total number of nodes in the tree

// Space complexity O(n) due to the recursion stack being used. 
// In the worst case, every tree might have one child