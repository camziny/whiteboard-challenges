// You're given a Node class that has a name and an array of optional children nodes.
// When put together, nodes form an acyclic tree-like structure.
// Implement the depthFirstSearch method on the Node class, which takes in an empty array,
// traverses the tree using the Depth-first Search approach (specifically navigating
// the tree from left to right), stores all of the nodes' names in the input array,
// and returns it.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array, self = this) {
    array.push(self.name);
    for (const child of self.children) {
      this.depthFirstSearch(array, child);
    }
    return array;
  }
}
