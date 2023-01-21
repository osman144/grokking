// Medium
// ====== Sum of Path Numbers =======
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

  dfs(node, sum){
    if(node === null) return 0;
    sum = 10 * sum + node.val // 10 * 0 + 1;

    if(node.left === null & node.right === null) return sum;

    return this.dfs(node.left, sum) + this.dfs(node.right, sum)
  }
}


// let myTree = new Tree();
// let root = new Node(1);
// root.left = new Node(7);
// root.right = new Node(9);
// root.right.left = new Node(2);
// root.right.right = new Node (9)

let myTree = new Tree();
let root = new Node(1);
root.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(2);
root.right.right = new Node (9)

console.log(myTree.dfs(root, 0))