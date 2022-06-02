// Easy
// ============ Binary Tree Path Sum ==============

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
    let newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(currentNode){
      // ignore duplicates
      if(val === currentNode.val) return;

      // go to left if less than current node
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;
        }
        // else keep going through current loop
        currentNode = currentNode.left
      }else if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right
      }
    }
  }

  dfs(sum){
    let list = [];
    let result = this.root;
    function traverse(node){
      if(this.node === null) return;

      if(node.left){
        result = result + node.val;
        traverse(node.left);
      }
      if(result === sum){
        return true
      }
      if(node.right){
        traverse(node.right);
      }
    }
    traverse(this.root);
    return false;
  }

  
}

let bst = new BinarySearchTree();

bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(0)
bst.insert(4)

console.log(bst)