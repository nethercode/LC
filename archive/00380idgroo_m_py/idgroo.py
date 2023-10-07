import random

class RandomizedSet:
    def __init__(self):
        self.nums = []  # List to store the elements
        self.index_map = {}  # Dictionary to map elements to their indices

    def insert(self, val: int) -> bool:
        if val in self.index_map:
            return False

        self.nums.append(val)
        self.index_map[val] = len(self.nums) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.index_map:
            return False

        # Get the index of the element to be removed
        index = self.index_map[val]
        # Move the last element to the position of the element to be removed
        last_element = self.nums[-1]
        self.nums[index] = last_element
        self.index_map[last_element] = index

        # Update the index of the last_element in the dictionary
        del self.index_map[val]

        # Remove the last element from the list
        self.nums.pop()

        return True

    def getRandom(self) -> int:
        return random.choice(self.nums)
