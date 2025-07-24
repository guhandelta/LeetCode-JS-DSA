
# Memory Efficient

from typing import List, Generator
from collections import deque
from itertools import product
import time

class Solution5:
    """
    Approach: Use generator to yield combinations one at a time (memory efficient for large inputs)
    Time Complexity: O(4^n) to generate all combinations
    Space Complexity: O(n) for recursion stack, generates combinations lazily
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        return list(self._generate_combinations(digits))
    
    def _generate_combinations(self, digits: str) -> Generator[str, None, None]:
        """Generator that yields combinations one at a time"""
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        def generate(index: int, combination: str) -> Generator[str, None, None]:
            """
            Recursive generator helper
            
            Args:
                index: current digit position
                combination: current combination being built
            """
            # Base case: yield complete combination
            if index == len(digits):
                yield combination
                return
            
            letters = phone_map[digits[index]]
            
            # Recursively generate combinations for each letter
            for letter in letters:
                yield from generate(index + 1, combination + letter)
        
        # Start generation from index 0 with empty combination
        yield from generate(0, "")
