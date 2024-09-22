import java.util.HashMap;
import java.util.Map;

public class TrieExample {

    static class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        boolean isEndOfWord;

        public void insert(String word) {
            TrieNode current = this;
            for (char ch : word.toCharArray()) {
                current = current.children.computeIfAbsent(ch, c -> new TrieNode());
            }
            current.isEndOfWord = true;
        }
    }

    public static void traverse(TrieNode node, StringBuilder word, StringBuilder result) {
        if (node.isEndOfWord) {
            result.append(word.toString()).append(" ");
        }
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            word.append(entry.getKey());
            traverse(entry.getValue(), word, result);
            word.deleteCharAt(word.length() - 1); // Backtrack
        }
    }

    public static void main(String[] args) {
        String sentence = "I'm on vacation";
        String[] words = sentence.split(" ");
        TrieNode root = new TrieNode();

        for (String word : words) {
            root.insert(word);
        }

        StringBuilder result = new StringBuilder();
        traverse(root, new StringBuilder(), result);

        System.out.println(result.toString().trim());
    }
}
