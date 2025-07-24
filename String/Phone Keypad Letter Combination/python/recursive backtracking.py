from typing import List, Generator
from collections import deque
from itertools import product
import time

class Solution1:
    """
    Approach: Use recursive backtracking to build combinations character by character
    Time Complexity: O(4^n) where n is the length of digits (worst case when all digits map to 4 letters)
    Space Complexity: O(n) for recursion stack depth, O(4^n) for storing all combinations
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        # Edge case: empty input returns empty list
        if not digits:
            return []
        
        # Phone keypad mapping - each digit maps to its corresponding letters
        phone_map = {
            '2': 'abc',
            '3': 'def', 
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        
        result = []
        
        def backtrack(index: int, current_combination: str) -> None:
            """
            Recursive helper function to build combinations
            
            Args:
                index: current position in digits string
                current_combination: combination built so far
            """
            # Base case: we've processed all digits, add combination to result
            if index == len(digits):
                result.append(current_combination)
                return
            
            # Get current digit and its corresponding letters
            current_digit = digits[index]
            letters = phone_map[current_digit]
            
            # Try each letter for current digit
            for letter in letters:
                # Add current letter and recurse for next digit
                backtrack(index + 1, current_combination + letter)
        
        # Start backtracking from index 0 with empty combination
        backtrack(0, "")
        return result