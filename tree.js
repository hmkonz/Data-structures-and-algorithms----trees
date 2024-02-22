/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if there is no root node, return 0 since there are no nodes/values in the tree
    if (!this.root) return 0;

    // initialize 'total' to the value of root
    let total = this.root.value;

    function sumHelper(node) {
      // iterate over all the children of a Node ('child')
      for (let child of node.children) {
        // add the values of 'child' to 'total'
        total += child.val;
        // if 'child' has any children,
        if (child.children.length > 0) {
          // execute sumHelper recursively with 'child' now as the root
          sumHelper(child);
        }
      }
    }

    // execute the sumHelper function with root passed in as the node to start with
    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if there is no root node, return 0 since there are no nodes/values in the tree
    if (!this.root) return 0;
    // check to see if the value of 'root' is even. If so, initialize 'count' to 1; otherwise, initialize 'count' to zero
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      // iterate over all the children of a Node ('child')
      for (let child of node.children) {
        // if 'child' has a value that's even, add 1 to 'count'
        if (child.val % 2 === 0) count++;
        // if 'child' has any children
        if (child.children.length > 0) {
          // execute countEvensHelper recursively with 'child' now as the root
          countEvensHelper(child);
        }
      }
    }
    // execute the countEvensHelper function with root passed in as the node to start with
    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if there is no root node, return 0 since there are no nodes/values in the tree
    if (!this.root) return 0;

    // if the value of root > lowerBound (passed in), initialize 'count' to 1; otherwise initialize 'count' to 0
    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node) {
      // iterate over all the children of a Node ('child')
      for (let child of node.children) {
        // if the value of 'child' > lowerBound, add 1 to 'count'
        if (child.val > lowerBound) count++;
        // if 'child' has any children
        if (child.children.length > 0) {
          // execute numGreater recursively with 'child' now as the root
          numGreater(child);
        }
      }
    }
    // execute the numGreater function with root passed in as the node to start with
    numGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
