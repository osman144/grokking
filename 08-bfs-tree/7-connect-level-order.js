// Medium
// ============ Connect Level Order Siblings =============
class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class Tree{
  constructor(){}

  bfs(root){
    if(root === null) return null
    let queue = [root]

    while(queue.length > 0){
      let length = queue.length;
      let prevNode = null;
      for(let i=0; i<length; i++){
        let currNode = queue.shift()
        if(prevNode !== null) prevNode.next = currNode;
        prevNode = currNode;
        if(currNode.left !== null) queue.push(currNode.left)
        if(currNode.right !== null) queue.push(currNode.right)
      }
    }
    return root;
  }
}

let myTree = new Tree()

let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(myTree.bfs(root))
