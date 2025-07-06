
# Functional Approach

from typing import List, Generator
from collections import deque
from itertools import product
import time

class Solution4:
    """
    Approach: Use functools.reduce to build combinations functionally
    Time Complexity: O(4^n) - same complexity but functional style
    Space Complexity: O(4^n) for storing intermediate and final results
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        from functools import reduce
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        def combine(combinations: List[str], digit: str) -> List[str]:
            """
            Combine existing combinations with letters from current digit
            
            Args:
                combinations: existing combinations
                digit: current digit to process
                
            Returns:
                New combinations with current digit's letters appended
            """
            letters = phone_map[digit]
            return [combo + letter 
                for combo in combinations 
                for letter in letters]
        
        # Start with empty string and reduce over each digit
        return reduce(combine, digits, [""])