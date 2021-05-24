function LinkedList(head = null) {
  this.head = head;
}

function Node(val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

LinkedList.prototype.add = function (val) {
  if (this.head) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    const next = new Node(val, curr, null);
    curr.next = next;
    next.prev = curr;
  } else {
    this.head = new Node(val);
  }

  return this;
};

LinkedList.prototype.delete = function (val) {
  if (this.head) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        if (curr === this.head) {
          this.head = curr.next;
          curr.next.prev = null;
          curr.next = null;
          break;
        }

        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        curr.next = null;
        curr.prev = null;
      }

      curr = curr.next;
    }
  } else {
    return this;
  }

  return this;
};

LinkedList.prototype.traverse = function () {
  const vals = [];
  let curr = this.head;

  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  return vals;
};

LinkedList.prototype.traverseRev = function () {
  const vals = [];
  let curr = this.head;

  while (curr.next) {
    curr = curr.next;
  }

  while (curr) {
    vals.push(curr.val);
    curr = curr.prev;
  }

  return vals;
};

module.exports = LinkedList;
