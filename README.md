# Linked List

This is a project for implementing a Linked List in JavaScript. A Linked List is a linear data structure where each element is a node that contains a reference to the next element in the list. The project was proposed by [The Odin Project](https://www.theodinproject.com), as an exercise to solidify the learning of data structures.

## How to use

- Import classes to your code:

```javascript
import { LinkedList, Node } from "./linked-lists.js";
```

- Create a list:

```javascript
new LinkedList();
```

- Create a Node:

```javascript
new Node(value, next);
// Set both as null by default.
```

## LinkedList methods

```javascript
getHead();
// Returns the first node in the list

getTail();
// Returns the last node in the list

append(value);
// Adds a new node containing value to the end of the list

prepend(value);
// Adds a new node containing value to the start of the list

size();
// Returns the total number of nodes in the list

at((index = 0));
// Returns the node at the given index

pop();
// Removes the last element from the list

find(value);
// Returns the index of the node containing value, or null if not found.

contain(value);
// Returns true if the passed in value is in the list, otherwise returns false.

toString();
// represents your LinkedList objects as strings, so you can print them out
// and preview them in the console.
// The format will be: ( value ) -> ( value ) -> ( value ) -> null

insertAt(index, (newValue = null));
// Inserts a new node with the provided value at the given index.

removeAt(index);
// Removes the node at the given index.
```
