class Codec {
    // Encodes a binary tree to a string.
    fun serialize(root: TreeNode?): String {
        if (root == null) {
            return ""
        }
        val sb = StringBuilder()
        serializeHelper(root, sb)
        return sb.toString()
    }

    // Helper function to perform depth-first traversal for serialization
    private fun serializeHelper(node: TreeNode?, sb: StringBuilder) {
        if (node == null) {
            sb.append("n,")
        } else {
            sb.append(node.`val`).append(",")
            serializeHelper(node.left, sb)
            serializeHelper(node.right, sb)
        }
    }

    // Decodes a string to a binary tree.
    fun deserialize(data: String): TreeNode? {
        if (data.isEmpty()) {
            return null
        }
        val values = data.split(",")
        val i = intArrayOf(0)
        return deserializeHelper(values, i)
    }

    // Helper function to perform depth-first deserialization
    private fun deserializeHelper(values: List<String>, i: IntArray): TreeNode? {
        if (i[0] >= values.size || values[i[0]] == "n") {
            i[0]++
            return null
        }
        val value = values[i[0]].toInt()
        val node = TreeNode(value)
        i[0]++
        node.left = deserializeHelper(values, i)
        node.right = deserializeHelper(values, i)
        return node
    }
}