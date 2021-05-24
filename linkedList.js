function LinkedList(head = null) {
  this.head = head;
}

function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

LinkedList.prototype.add = function (val) {
  if (this.head) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  } else {
    this.head = new Node(val);
  }

  return this;
};

LinkedList.prototype.remove = function (val) {
  if (!this.head) return this;

  let curr = this.head;

  if (curr.val === val && curr === this.head) {
    this.head = curr.next;
    curr.next = null;
  }

  while (curr?.next) {
    if (!curr) break;

    if (curr.next.val === val) {
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }

  return this;
};

LinkedList.prototype.vals = function () {
  if (!this.head) return this;
  const vals = [];
  let curr = this.head;

  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  return vals;
};

LinkedList.prototype.fromArray = function (data) {
  this.head = new Node(data[0]);
  let curr = this.head;

  for (let i = 1; i < data.length; i++) {
    const val = data[i];
    curr.next = new Node(val);
    curr = curr.next;
  }

  return this;
};

module.exports = LinkedList;
