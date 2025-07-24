
# Queue Based BFS

from typing import List, Generator
from collections import deque
from itertools import product
import time

class Solution2:
    """
    Approach: Build combinations iteratively using a queue, processing one digit at a time
    Time Complexity: O(4^n) - same as recursive, but with iterative implementation
    Space Complexity: O(4^n) for storing combinations in queue
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        # Initialize queue with empty string to start building combinations
        queue = deque([""])
        
        # Process each digit one by one
        for digit in digits:
            letters = phone_map[digit]
            
            # Process all combinations currently in queue
            for _ in range(len(queue)):
                combination = queue.popleft()
                
                # Append each possible letter for current digit
                for letter in letters:
                    queue.append(combination + letter)
        
        return list(queue)