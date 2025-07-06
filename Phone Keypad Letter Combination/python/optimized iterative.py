
# In-place modification

class Solution9:
    """
    Approach: Optimized iterative approach with in-place list modifications
    Time Complexity: O(4^n) - optimal for the problem
    Space Complexity: O(4^n) for result, but more memory efficient in practice
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        # Start with combinations for first digit
        result = list(phone_map[digits[0]])
        
        # Process remaining digits
        for digit in digits[1:]:
            letters = phone_map[digit]
            new_result = []
            
            # Extend each existing combination with each letter
            for combination in result:
                for letter in letters:
                    new_result.append(combination + letter)
            
            result = new_result
        
        return result
