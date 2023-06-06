def suffix_tree(text):

  nodes = {}
  for i in range(len(text)):
    nodes[i] = {}

  for i in range(len(text)):
    for j in range(i, len(text)):
      suffix = text[i:j + 1]
      node = nodes[i]
      for c in suffix:
        if c not in node:
          node[c] = {}
        node = node[c]

  return nodes
