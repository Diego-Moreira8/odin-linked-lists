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

// Creating nodes
let node1 = new Node("Diego");
let node2 = new Node("Paloma");
let node3 = new Node("Rafaello");
let node4 = new Node("Lorena");

// Adding the links
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Creating the Linked List with the first node as the head
let list = new LinkedList(node1);

// console.log(node1);
// console.log(node2);
// console.log(node3);

console.log(list);
