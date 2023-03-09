class LinkedList {
  constructor(_head = null) {
    this.head = _head;
  }
}

class Node {
  constructor(_value = null, _next = null) {
    this.value = _value;
    this.next = _next;
  }
}

let node1 = new Node("Diego");
let node2 = new Node("Paloma");
let node3 = new Node("Rafaello");
node1.next = node2;
node2.next = node3;

console.log(node1);
console.log(node2);
console.log(node3);
