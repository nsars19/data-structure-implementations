function BST(root = null) {
  this.root = root;
}

function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

BST.prototype.add = function (val, curr = this.root) {
  const node = new Node(val);

  if (!curr) {
    this.root = node;
    return this;
  }

  if (node.val < curr.val) {
    if (!curr.left) {
      curr.left = node;
    } else {
      this.add(val, curr.left);
    }
  } else if (node.val > curr.val) {
    if (!curr.right) {
      curr.right = node;
    } else {
      this.add(val, curr.right);
    }
  }

  return this;
};

BST.prototype.search = function (val, curr = this.root) {
  let contains = false;

  if (!curr) {
    return false;
  }

  if (curr.val === val) {
    return true;
  } else if (val < curr.val) {
    contains = this.search(val, curr.left);
  } else {
    contains = this.search(val, curr.right);
  }

  return contains;
};

module.exports = BST;
