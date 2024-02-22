/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // if there is no root node, return 0 since there are no nodes/values in the tree
    if (!this.root) return 0;

    function minDepthHelper(node) {
      // if there are no nodes to the left and right of 'node' passed in, return a depth of the tree as 1
      if (node.left === null && node.right === null) return 1;
      // if there is not a node to the left of 'node' passed in, return 1 + the result of the recursive function  minDepthHelper with node.right passed in
      if (node.left === null) return minDepthHelper(node.right) + 1;
      // if there is not a node to the right of 'node' passed in, return 1 + the result of the recursive function  minDepthHelper with node.left passed in
      if (node.right === null) return minDepthHelper(node.left) + 1;
      // otherwise, return 1 + the lesser number between minDepthHelper(node.left) and minDepthHelper(node.right)
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }
    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // if there is no root node, return 0 since there are no nodes/values in the tree
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      // if there are no nodes to the left and right of 'node' passed in, return a depth of the tree as 1
      if (node.left === null && node.right === null) return 1;
      // if there is not a node to the left of 'node' passed in, return 1 + the result of the recursive function  maxDepthHelper with node.right passed in
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      // if there is not a node to the right of 'node' passed in, return 1 + the result of the recursive function  maxDepthHelper with node.left passed in
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      // otherwise, return 1 + the greater number between tmaxDepthHelper(node.left) and maxDepthHelper(node.right)
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // intialize 'result' to 0
    let result = 0;

    function maxSumHelper(node) {
      // if 'node' passed in doesn't exist, return 0 since that node isn't in the tree
      if (node === null) return 0;
      // sum up of values going down to the left of 'node' by setting 'leftSum' equal to the recursive function maxSumHelper with 'node.left' passed in
      const leftSum = maxSumHelper(node.left);
      // sum up of values going down to the right of 'node' by setting 'rightSum' equal to the recursive function maxSumHelper with 'node.right' passed in
      const rightSum = maxSumHelper(node.right);
      // set result equal to the max value between result and node.val+ leftSum + rightSum
      result = Math.max(result, node.val + leftSum + rightSum);
      // return the max value between 0, leftSum + node.val and rightSum + node.val
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    // execute recursive function maxSumHelper with 'root' passed in as the starting node
    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // if there is no root node, return null since there are no nodes/values in the tree
    if (!this.root) return null;

    // using Breadth First Search, initialize 'queue' to an array including 'root'
    let queue = [this.root];
    // initialize 'closest' to null
    let closest = null;

    // while there are elements in 'queue':
    while (queue.length) {
      // let currentNode equal the first element in queue (shift removes the first element)
      let currentNode = queue.shift();
      // let 'currentVal' equal the value of curentNode
      let currentVal = currentNode.val;
      // let 'higherThanLowerBound' equal true if currentVal is greater than 'lowerBound' passed in
      let higherThanLowerBound = currentVal > lowerBound;
      // let 'shouldReassignClosest' equal true if currentVal is less than 'closest'; otherwise it's set equal to null
      let shouldReassignClosest = currentVal < closest || closest === null;
      // if both are true, set 'closest' to 'currentVal'
      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }
      // if there is a node to the left of currentNode, add it to 'queue'
      if (currentNode.left) queue.push(currentNode.left);
      // if there is a node to the left of currentNode, add it to 'queue'
      if (currentNode.right) queue.push(currentNode.right);
    }
    // return the smallest value in the tree which is larger than lowerBound
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
