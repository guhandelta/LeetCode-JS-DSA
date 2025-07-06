
# Most concise

class Solution7:
    """
    Approach: Use itertools.product to compute Cartesian product of letter sets
    Time Complexity: O(4^n) - inherent to the problem
    Space Complexity: O(4^n) for result storage
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        # Get letter groups for each digit
        letter_groups = [phone_map[digit] for digit in digits]
        
        # Compute Cartesian product and join letters
        return [''.join(combination) for combination in product(*letter_groups)]
