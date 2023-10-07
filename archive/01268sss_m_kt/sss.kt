class TrieNode {
    val children: Array<TrieNode?> = arrayOfNulls(26)
    val suggestions: MutableList<String> = mutableListOf()
}

class Solution {
    fun suggestedProducts(products: Array<String>, searchWord: String): List<List<String>> {
        val root = TrieNode()

        // Insert all products into the trie
        for (product in products) {
            insertProduct(root, product)
        }

        val results: MutableList<List<String>> = mutableListOf()
        var prefix = ""

        // Perform prefix search for each character in searchWord
        for (char in searchWord) {
            prefix += char
            val suggestions = searchProducts(root, prefix)
            results.add(suggestions)
        }

        return results
    }

    private fun insertProduct(root: TrieNode, product: String) {
        var node = root

        for (char in product) {
            val index = char - 'a'

            if (node.children[index] == null) {
                node.children[index] = TrieNode()
            }

            node = node.children[index]!!
            node.suggestions.add(product)

            // Sort suggestions lexicographically
            node.suggestions.sort()

            // Keep only the top 3 suggestions
            if (node.suggestions.size > 3) {
                node.suggestions.removeAt(node.suggestions.size - 1)
            }
        }
    }

    private fun searchProducts(root: TrieNode, prefix: String): List<String> {
        var node = root

        for (char in prefix) {
            val index = char - 'a'

            if (node.children[index] == null) {
                return emptyList()
            }

            node = node.children[index]!!
        }

        return node.suggestions
    }
}
