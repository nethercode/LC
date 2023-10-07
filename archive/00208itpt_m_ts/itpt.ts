class TrieNode {
    endOfWord: boolean;
    children: Record<string, TrieNode>;
  
    constructor() {
      this.endOfWord = false;
      this.children = {};
    }
  }
  
  class Trie {
    root: TrieNode;
  
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string): void {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!(char in node.children)) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.endOfWord = true;
    }
  
    search(word: string): boolean {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!(char in node.children)) {
          return false;
        }
        node = node.children[char];
      }
      return node.endOfWord;
    }
  
    startsWith(prefix: string): boolean {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!(char in node.children)) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  