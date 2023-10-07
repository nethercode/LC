class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas = 0  # Total gas available
        current_gas = 0  # Gas available at the current station
        start_station = 0  # Start station index
        
        for i in range(len(gas)):
            total_gas += gas[i] - cost[i]
            current_gas += gas[i] - cost[i]
            
            # If current_gas becomes negative, we cannot reach the next station
            # Start a new tour from the next station
            if current_gas < 0:
                current_gas = 0
                start_station = i + 1
        
        # If total_gas is negative, it means the total cost is more than the total gas available
        # Hence, it's not possible to complete a circular tour
        if total_gas < 0:
            return -1
        else:
            return start_station
