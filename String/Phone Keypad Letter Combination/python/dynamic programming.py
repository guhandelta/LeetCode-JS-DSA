from typing import List, Generator
from collections import deque
from itertools import product
import time

class Solution6:
    """
    Approach: Build combinations bottom-up using dynamic programming
    Time Complexity: O(4^n) - still need to generate all combinations
    Space Complexity: O(4^n) for storing intermediate results
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        # dp[i] will store all combinations for first i digits
        dp = [[] for _ in range(len(digits) + 1)]
        dp[0] = [""]  # Base case: empty string for 0 digits
        
        # Build combinations for each digit position
        for i in range(1, len(digits) + 1):
            current_digit = digits[i - 1]
            letters = phone_map[current_digit]
            
            # For each combination from previous step
            for prev_combination in dp[i - 1]:
                # Append each letter of current digit
                for letter in letters:
                    dp[i].append(prev_combination + letter)
        
        return dp[len(digits)]