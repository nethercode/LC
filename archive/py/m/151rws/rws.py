class Solution:
    def reverseWords(self, s: str) -> str:
        # Trim leading and trailing spaces
        s = s.strip()

        # Split the string into a list of words
        words = s.split()

        # Reverse the order of the words
        words.reverse()

        # Join the reversed words with a single space separator
        reversed_string = ' '.join(words)

        return reversed_string