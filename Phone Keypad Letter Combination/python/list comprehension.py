class Solution3:
    """
    Approach: Use Python's list comprehension with recursion for concise solution
    Time Complexity: O(4^n) - same complexity but more Pythonic style
    Space Complexity: O(4^n) for storing results, O(n) for recursion stack
    """
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        def helper(index: int) -> List[str]:
            """
            Recursive helper that returns all combinations for digits[index:]
            
            Args:
                index: starting index in digits string
                
            Returns:
                List of all possible combinations from current index
            """
            # Base case: no more digits to process
            if index == len(digits):
                return [""]
            
            # Get combinations for remaining digits
            rest_combinations = helper(index + 1)
            current_letters = phone_map[digits[index]]
            
            # Build combinations by prepending each letter to rest combinations
            return [letter + combo 
                    for letter in current_letters 
                    for combo in rest_combinations]
        
        return helper(0)