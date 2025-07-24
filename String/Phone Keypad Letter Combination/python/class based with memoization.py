class Solution8:
    """
    Approach: Class-based solution with memoization for repeated subproblems
    Time Complexity: O(4^n) for first call, O(1) for repeated identical calls
    Space Complexity: O(4^n) for memoization cache + results
    """
    
    def __init__(self):
        self.phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        self.memo = {}  # Memoization cache
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        # Check if result is already computed
        if digits in self.memo:
            return self.memo[digits]
        
        # Base case: single digit
        if len(digits) == 1:
            result = list(self.phone_map[digits])
            self.memo[digits] = result
            return result
        
        # Recursive case: combine first digit with rest
        first_digit = digits[0]
        rest_combinations = self.letterCombinations(digits[1:])
        
        result = [letter + combo 
                for letter in self.phone_map[first_digit] 
                for combo in rest_combinations]
        
        self.memo[digits] = result
        return result