class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        i = 0
        
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            if intervals[i][1] < newInterval[0]:
                result.append(intervals[i])
                i += 1
            elif intervals[i][0] > newInterval[1]:
                result.append(newInterval)
                break
            else:
                newInterval[0] = min(intervals[i][0], newInterval[0])
                newInterval[1] = max(intervals[i][1], newInterval[1])
                i += 1
        
        result.append(newInterval)
        result.extend(intervals[i:])
        
        return result
