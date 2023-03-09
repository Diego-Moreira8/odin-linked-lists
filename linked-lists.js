class LinkedList {
  constructor(_head = null) {
    this.head = _head;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    // Return the last node (that has a null next)
    // If the list is empty:
    if (this.head === null) {
      return this;
    } else {
      let lastNode = this.head;
      // While there is a next node, update "lastNode" with that nextNode
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      return lastNode;
    }
  }

  append(value) {
    // If it's the first node:
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tail = this.tail();
      tail.next = new Node(value);
    }
  }

  prepend(value) {
    // Store the list in aux to insert it in the link of the new head
    const aux = this.head;
    this.head = new Node(value);
    this.head.next = aux;
  }

  size() {
    // Very similar with the tail method, but with a counter
    // If the list is empty:
    if (this.head === null) {
      return 0;
    } else {
      let lastNode = this.head;
      let counter = 1;
      // While there is a next node, update "lastNode" with that nextNode
      while (lastNode.next) {
        counter++;
        lastNode = lastNode.next;
      }
      return counter;
    }
  }

  at(index = 0) {
    // If the list is empty:
    if (index === 0) {
      return this.head;
    } else {
      let currentNode = this.head.next;
      let counter = 1;

      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }

      return currentNode;
    }
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
