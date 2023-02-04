// Easy
// ============ Reverse Level Order Traversal ==============

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
    if(root === null) return [];
    let queue = [root];
    let arr = []; 

    while(queue.length > 0){
      let temp = [];
      let currLength = queue.length;
      for(let i=0; i<currLength; i++){
        let currNode = queue.shift() // 1
        temp.push(currNode.val);
        if(currNode.left !== null) queue.push(currNode.left);
        if(currNode.right !== null) queue.push(currNode.right);
      }

      // arr.unshift(temp); // add at beginning, time consideration? 

      arr.push(temp)
      // instead of using unshift, reduce time by just doing arr.reverse() 
      // or could use linked list
    }
    return arr.reverse();

    // return arr;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let myTree = new Tree()


console.log(myTree.bfs(root));

// Time complexity, O(n) to go through all nodes, shifting array around is also O(n) so O(n+n) = O(n)

// Space O(n)