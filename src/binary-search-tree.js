const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootC = null
  }

  root() {
    return this.rootC;
   // remove line with error and write your code here
  }

  add(data) {
this.rootC = addWithin(this.rootC, data);

function addWithin (node, data) {
  if (!node) {
    return new Node(data)
  }

  if (node.data === data) {
    return node;
  }

   if (data < node.data) {
    node.left = addWithin(node.left, data);
   } else {
    node.right = addWithin(node.right, data);
   }
   return node;
}
    // remove line with error and write your code here
  }

  has(data) {
   return searchWithin(this.rootC, data);

   function searchWithin(node, data) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return data < node.data ? 
      searchWithin(node.left, data) : 
      searchWithin(node.right, data);
   }

    // remove line with error and write your code here
  }

  find(data) {
    return searchWithin(this.rootC, data);
 function searchWithin (node, data) {
            if (!node) {
              return null;
            }

            if (node.data === data) {
              return node;
            }

            return data < node.data ? 
              searchWithin(node.left, data) : 
              searchWithin(node.right, data);
          }
          
}

  remove(data) {
    this.rootC = removeNode(this.rootC, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootC) {
      return;
    }

    let node = this.rootC;
    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootC) {
      return;
    }

    let node = this.rootC;
    while (node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}
const tree = new BinarySearchTree();


module.exports = {
  BinarySearchTree
};