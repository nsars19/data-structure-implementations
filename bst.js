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

BST.prototype.remove = function (val, curr = this.root) {
  if (!curr || !this.search(val)) return false;
  if (!curr.left && !curr.right) return false;

  const parent = this.findParent(val);
  const node = this.findNode(val);

  if (!node.left && !node.right) {
    // No children
    if (node.val < parent.val) {
      parent.left = node.right;
    } else {
      parent.right = node.left;
    }
  } else if (node.left && node.right) {
    // Two children
    let next = node.right;
    while (next.left) {
      next = next.left;
    }
    if (next !== node.right) {
      this.remove(next.val);
      node.val = next.val;
    } else {
      node.val = next.val;
      node.right = node.right.right;
    }
  } else {
    let next;
    if (!node.left) {
      next = node.right;
    } else {
      next = node.left;
    }
    if (curr === node) {
      this.root = next;
    } else if (parent.left === node) {
      parent.left = next;
    } else if (parent.right === node) {
      parent.right = next;
    }
  }
};

BST.prototype.findNode = function (val, node = this.root) {
  if (!node || !this.search(val)) return false;
  let curr = node;

  while (curr.val !== val) {
    if (val < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }

  return curr;
};

BST.prototype.findParent = function (val, node = this.root) {
  if (!node || !this.search(val)) return false;

  if (val < node.val) {
    if (!node.left) {
      return false;
    } else if (node.left.val === val) {
      return node;
    } else {
      return this.findParent(val, node.left);
    }
  } else {
    if (!node.right) {
      return false;
    } else if (node.right.val === val) {
      return node;
    } else {
      return this.findNode(val, node.right);
    }
  }
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
