#include <iostream>
#include <queue>

using namespace std;

struct Node {
  char data;
  int frequency;
  Node *left, *right;
};

class HuffmanTree {
 private:
  Node *root;

 public:
  HuffmanTree() { root = nullptr; }

  void buildTree(const vector<pair<char, int>> &characters) {
    // Create a priority queue of nodes.
    priority_queue<Node*, vector<Node*>, greater<Node*>> pq;

    for (const auto &character : characters) {
      Node *node = new Node();
      node->data = character.first;
      node->frequency = character.second;
      pq.push(node);
    }

    // While there are more than one node in the queue,
    // remove the two nodes with the lowest frequencies and create a new node
    // with these two nodes as children. The frequency of the new node
    // is the sum of the frequencies of the two children.
    while (pq.size() > 1) {
      Node *left = pq.top();
      pq.pop();

      Node *right = pq.top();
      pq.pop();

      Node *newNode = new Node();
      newNode->data = '\0';
      newNode->frequency = left->frequency + right->frequency;
      newNode->left = left;
      newNode->right = right;

      pq.push(newNode);
    }

    // The root of the tree is the top element of the priority queue.
    root = pq.top();
  }

  void printTree(Node *node, string code) {
    if (node == nullptr) {
      return;
    }

    if (node->data != '\0') {
      cout << node->data << ": " << code << endl;
    } else {
      printTree(node->left, code + "0");
      printTree(node->right, code + "1");
    }
  }

  string encode(string text) {
    string encodedText;

    for (char c : text) {
      encodedText += getCode(c);
    }

    return encodedText;
  }

  string getCode(char c) {
    Node *node = root;
    string code = "";

    while (node->data != c) {
      if (c < node->data) {
        node = node->left;
        code += "0";
      } else {
        node = node->right;
        code += "1";
      }
    }

    return code;
  }
};

int main() {
  vector<pair<char, int>> characters = {{'a', 5}, {'b', 2}, {'c', 3}};

  HuffmanTree huffmanTree;
  huffmanTree.buildTree(characters);

  cout << "Huffman tree:" << endl;
  huffmanTree.printTree(huffmanTree.root, "");

  string text = "abcabc";
  string encodedText = huffmanTree.encode(text);

  cout << "Encoded text:" << endl;
  cout << encodedText << endl;

  return 0;
}
