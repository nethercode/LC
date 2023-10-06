import math

class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        # Create a list of numbers from 1 to n
        nums = [str(i) for i in range(1, n+1)]
        
        # Calculate the factorial of n
        factorial = math.factorial(n)
        
        # Decrement k by 1 to make it zero-based
        k -= 1
        
        # Initialize the result string
        result = ""
        
        # Iterate from n to 1
        for i in range(n, 0, -1):
            # Calculate the index of the current number
            index = k // (factorial // i)
            
            # Append the corresponding number to the result
            result += nums[index]
            
            # Remove the used number from the list
            nums.pop(index)
            
            # Update k and factorial for the next iteration
            k %= factorial // i
            factorial //= i
        
        return result
