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
      let tail = this.getTail();
      tail.next = new Node(value);
    }
  }

  prepend(value) {
    // Creates a new Node linked to the head, and updates head with the new node
    const newNode = new Node(value, this.head);
    this.head = newNode;
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

  pop() {
    // Removes the last element from the list
    // If the list has one element:
    if (this.size() === 0) {
      console.error("The list is empty!");
    } else if (this.size() === 1) {
      this.head = null;
    } else {
      let nextToTail = this.at(this.size() - 2);
      nextToTail.next = null;
    }
  }

  find(value) {
    // Returns the index of the node containing value, or null if not found
    if (this.head.value === value) {
      return 0;
    } else {
      let currentNode = this.head.next;
      let index = 1;

      while (currentNode.value !== value) {
        // Stop the loop and return null if the next node doesn't exist
        if (currentNode.next === null) {
          return null;
        } else {
          // Else, updates variables for the next loop
          currentNode = currentNode.next;
          index++;
        }
      }
      return index;
    }
  }

  contain(value) {
    // Uses find method to verify the value exists
    return this.find(value) !== null ? true : false;
  }

  toString() {
    // Represents the LinkedList objects as strings
    let currentNode = this.head;
    let string = "";

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string += `( null )`;

    return string;
  }

  insertAt(index, newValue = null) {
    // Inserts a new node with the provided value at the given index
    // Backwards index treatment
    if (index < 0) {
      index = this.size() + index + 1;
      if (index < 0) {
        console.error("The index cannot be smaller than 0");
        return null;
      }
    }

    if (index === 0) {
      this.prepend(newValue);
    } else {
      let currentNode = this.head;
      // Locates the index
      // Starts at 1, 0 was already verified
      for (let i = 1; i < index; i++) {
        if (currentNode.next === null) {
          console.error(
            `This index is bigger than the last of the list. If you want to
            insert in the end of the list, use the method append(value)`
          );
          return null;
        }
        currentNode = currentNode.next;
      }

      // Creates the new Node with the given value
      const newNode = new Node(newValue);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
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

console.log(list.toString());
