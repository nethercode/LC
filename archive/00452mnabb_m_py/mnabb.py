class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        # Sort balloons based on their ending coordinates
        points.sort(key=lambda x: x[1])
        
        arrows = 0
        end = float('-inf')  # Initialize the ending coordinate
        
        # Iterate through the balloons
        for balloon in points:
            # If the current balloon's starting coordinate is greater than the current arrow's range
            # it means a new arrow needs to be shot
            if balloon[0] > end:
                arrows += 1
                end = balloon[1]  # Update the ending coordinate
            
        return arrows
