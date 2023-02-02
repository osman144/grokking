// Medium
// ============ Count Paths for a sum ==============

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

  count_paths(root, targetSum) {
    // A map that stores the number of times a prefix sum has occurred so far.
    const map = new Map();
  
    return count_paths_prefix_sum(root, targetSum, map, 0);
  }
  
  count_paths_prefix_sum(node, targetSum, map, currentPathSum) {
    if (!node) return 0;
    let pathCount = 0;
    currentPathSum += node.val;
    if (targetSum === currentPathSum) pathCount++;
  
    //'currentPathSum' is the path sum from root to the current node. If within this path, there 
    // is a valid solution, then there must be an 'oldPathSum' such that:
    // => currentPathSum - oldPathSum = targetSum
    // => currentPathSum - targetSum = oldPathSum
    // Hence, we can search this 'oldPathSum' in the map from the key 'currentPathSum - targetSum'.
    if (map.has(currentPathSum - targetSum))
      pathCount += map.get(currentPathSum - targetSum);
  
    // This is the key step in the algorithm. We are storing the number of times the prefix sum
    // `currentPathSum` has occurred so far.
    map.set(currentPathSum, map.get(currentPathSum) + 1 || 1);
  
    // Counting the number of paths from the left and right subtrees.
    pathCount += count_paths_prefix_sum(node.left,targetSum, map, currentPathSum);
    pathCount += count_paths_prefix_sum(node.right, targetSum, map, currentPathSum);
  
    // Removing the current path sum from the map for backtracking.
    // 'currentPathSum' is the prefix sum up to the current node. When we go back (i.e., backtrack), 
    // thenthe current node is no more a part of the path, hence, we should remove its prefix sum 
    // from the map.
    map.set(currentPathSum, map.get(currentPathSum) - 1);
  
    return pathCount;
  }
}


let tree = new Tree();
let root = new Node(1);
root.left = new Node(7);
root.left.left = new Node(6);
root.left.right = new Node(5);
root.right = new Node(9);
root.right.left = new Node(2);
root.right.right = new Node(3);

console.log(tree.countPaths(root, 12))
