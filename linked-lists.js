class LinkedList {
  constructor(_head = null) {
    this.head = _head;
  }

  isEmpty = () => this.head === null;

  backwardsIndex(negativeIndex) {
    // Use negative indexes to move backwards in the list
    negativeIndex = this.size() + negativeIndex;
    if (negativeIndex < 0) {
      console.log("The index cannot be smaller than 0");
      return null;
    } else {
      return negativeIndex;
    }
  }

  getHead() {
    // Return the first node (that has a null next)
    return this.head;
  }

  getTail() {
    // Return the last node (that has a null next)
    // If the list is empty:
    if (this.isEmpty()) {
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

  append(value = null) {
    // Adds a new node containing value to the end of the list
    if (this.isEmpty()) {
      this.head = new Node(value);
    } else {
      const tail = this.getTail();
      tail.next = new Node(value);
    }
  }

  prepend(value = null) {
    // Adds a new node containing value to the start of the list.
    // Creates a new Node with the passed value and a link to the head,
    // then updates head with the new node
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    // Returns the total number of nodes in the list
    // Very similar with the getTail method, but with a counter
    if (this.isEmpty()) {
      return 0;
    } else {
      let lastNode = this.head;
      let counter = 1;
      // While there is a next node, update "lastNode" with that nextNode,
      // and increments the counter
      while (lastNode.next) {
        lastNode = lastNode.next;
        counter++;
      }
      return counter;
    }
  }

  at(index) {
    // Returns the node at the given index

    // Treats the input
    if (index === undefined || isNaN(index)) {
      console.log("Invalid parameter. Please provide a valid value for index.");
      return null;
    } else if (index < 0) {
      // Generates a backwards index
      index = this.backwardsIndex(index);
      if (index === null) {
        return null;
      }
    }

    // Search the index
    let currentNode = this.head;
    for (let i = 0; i < index; i++) currentNode = currentNode.next;
    return currentNode;
  }

  pop() {
    // Removes the last element from the list
    if (this.isEmpty()) {
      console.log("The list is empty!");
    } else if (this.head.next === null) {
      // If the list has one element:
      this.head = null;
    } else {
      // Subtracts 2 from the size of the list (1 to get the last index and
      // another 1 to the next to it), and get the node with that index
      let nextToTail = this.at(this.size() - 2);
      nextToTail.next = null;
    }
  }

  find(value) {
    // Returns the index of the node containing value, or null if not found
    let currentNode = this.head;
    let index = 0;

    while (currentNode.value !== value) {
      // If the next node doesn't exist, return null and stop the loop
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

  contain(value) {
    // Uses find method to verify if the value exists
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

  inputTreatment(index) {
    // Treats the input for the insertAt and removeAt methods.
    // Returns null if invalid

    if (index === undefined || isNaN(index)) {
      console.log("Invalid index. Please provide a valid value for index.");
      return null;
    } else if (index < 0) {
      // Generates a backwards index
      index = this.backwardsIndex(index);
      if (index === null) {
        return null;
      }
    }

    // After treated with no errors, return it
    return index;
  }

  insertAt(index, newValue = null) {
    // Inserts a new node with the provided value at the given index
    // Treats the input
    index = this.inputTreatment(index);
    if (index === null) return;

    // Search the index
    if (index === 0) {
      this.prepend(newValue);
    } else {
      let currentNode = this.head;

      // Locate the node. Starts at 1, 0 was already verified
      for (let i = 1; i < index; i++) {
        if (currentNode.next === null) {
          console.log(
            "This index is bigger than the last of the list. If you want to insert in the end of the list, use the method append(value)"
          );
          return;
        }
        currentNode = currentNode.next;
      }

      // Creates the new Node with the given value
      const newNode = new Node(newValue);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  removeAt(index) {
    // Removes the node at the given index
    // Treats the input
    index = this.inputTreatment(index);
    if (index === null) return;

    // Search the index
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      // Locates the index one position before the selected one
      for (let i = 0; i < index - 1; i++) {
        if (currentNode.next.next === null) {
          console.log("This index doesn't exists");
          return;
        }
        currentNode = currentNode.next;
      }

      currentNode.next = currentNode.next.next;
    }
  }
}

class Node {
  constructor(_value = null, _next = null) {
    this.value = _value;
    this.next = _next;
  }
}

// Tests

const list = new LinkedList();

list.append("Diego");
list.append("Paloma");
list.append("Rafaello");
list.append("Lorena");
list.append("Caixa de som");

//list.head = new Node("Diego");
