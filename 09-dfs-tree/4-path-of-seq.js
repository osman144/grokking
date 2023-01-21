// Medium
// ============ Path with Given Sequence ==============

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

  hasPath(root, seq){
    if(root === null) return seq.length === 0;

    return this.dfs(root, seq, 0)
  }

  dfs(node, seq, i){
    if(node === null) return false;

    if(i >= seq.length || node.val != seq[i]) return false;

    if(node.left === null && node.right === null && i === seq.length-1){
      // reached end of tree, and reached end of sequence 
      return true;
    }

    // call dfs on left and right nodes, either directions can return true/false
    // increment index
    return this.dfs(node.left, seq, i+1) || this.dfs(node.right, seq, i+1);
  }
}

let tree = new Tree();
let root = new Node(1);
root.left = new Node(0);
root.left = new Node(1);
root.right = new Node(1);
root.right.left = new Node(7);
root.right.right = new Node(5);

console.log(tree.hasPath(root, [1,1,6]));