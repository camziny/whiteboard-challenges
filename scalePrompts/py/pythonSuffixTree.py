class SuffixTreeNode:
    def __init__(self, suffix=None, children=None):
        self.suffix = suffix or {}
        self.children = children or {}

    def add_suffix(self, s, index):
        self.suffix[index] = len(s)
        if not s:
            return

        if s[0] not in self.children:
            self.children[s[0]] = SuffixTreeNode()

        child = self.children[s[0]]
        child.add_suffix(s[1:], index)

    def __repr__(self):
        return f"Node(suffix={self.suffix}, children={self.children})"


class SuffixTree:
    def __init__(self, s):
        self.root = SuffixTreeNode()
        self.string = s

        for i in range(len(s)):
            self.root.add_suffix(s[i:], i)

    def __repr__(self):
        return f"SuffixTree(root={self.root})"


string = "banana"
tree = SuffixTree(string)
print(tree)
