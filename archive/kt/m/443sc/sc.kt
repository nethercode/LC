class Solution {
    fun compress(chars: CharArray): Int {
        var anchor = 0  // Anchor to mark the start of a group
        var writeIndex = 0  // Index to write the compressed characters
        
        for (readIndex in chars.indices) {
            // Check if we have reached the end of the array or if the current character is different from the next one
            if (readIndex + 1 == chars.size || chars[readIndex] != chars[readIndex + 1]) {
                chars[writeIndex++] = chars[anchor]  // Write the character
                
                // Check if there are more than one occurrence of the character
                if (readIndex > anchor) {
                    val count = readIndex - anchor + 1
                    val countString = count.toString()
                    
                    // Write the count as separate characters if it's greater than or equal to 10
                    for (i in countString.indices) {
                        chars[writeIndex++] = countString[i]
                    }
                }
                
                anchor = readIndex + 1  // Update the anchor for the next group
            }
        }
        
        return writeIndex  // Return the new length of the compressed array
    }
}
