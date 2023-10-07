type TrieNode struct {
    children map[byte]*TrieNode
    word     string
}

func buildTrie(words []string) *TrieNode {
    root := &TrieNode{children: make(map[byte]*TrieNode)}
    for _, word := range words {
        node := root
        for i := 0; i < len(word); i++ {
            char := word[i]
            if _, ok := node.children[char]; !ok {
                node.children[char] = &TrieNode{children: make(map[byte]*TrieNode)}
            }
            node = node.children[char]
        }
        node.word = word
    }
    return root
}

func findWords(board [][]byte, words []string) []string {
    trie := buildTrie(words)
    result := make([]string, 0)
    for i := 0; i < len(board); i++ {
        for j := 0; j < len(board[0]); j++ {
            findWordsHelper(board, i, j, trie, &result)
        }
    }
    return result
}

func findWordsHelper(board [][]byte, i, j int, node *TrieNode, result *[]string) {
    char := board[i][j]
    if char == '#' || node.children[char] == nil {
        return
    }
    node = node.children[char]
    if node.word != "" {
        *result = append(*result, node.word)
        node.word = ""
    }
    board[i][j] = '#'
    if i > 0 {
        findWordsHelper(board, i-1, j, node, result)
    }
    if j > 0 {
        findWordsHelper(board, i, j-1, node, result)
    }
    if i < len(board)-1 {
        findWordsHelper(board, i+1, j, node, result)
    }
    if j < len(board[0])-1 {
        findWordsHelper(board, i, j+1, node, result)
    }
    board[i][j] = char
}