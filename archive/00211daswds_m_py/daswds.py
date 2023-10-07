class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True

    def search(self, word: str) -> bool:
        return self._search_helper(word, self.root)

    def _search_helper(self, word: str, node: TrieNode) -> bool:
        if not word:
            return node.is_word

        char = word[0]
        if char == '.':
            for child in node.children.values():
                if self._search_helper(word[1:], child):
                    return True
        else:
            if char in node.children:
                return self._search_helper(word[1:], node.children[char])

        return False