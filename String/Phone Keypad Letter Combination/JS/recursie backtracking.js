/**
 * Approach: Use recursive backtracking to build combinations character by character
 * Time Complexity: O(4^n) where n is the length of digits (worst case when all digits map to 4 letters)
 * Space Complexity: O(n) for recursion stack depth, O(4^n) for storing all combinations
 */
function letterCombinations1(digits) {
    // Edge case: empty input
    if (!digits || digits.length === 0) return [];
    
    // Phone keypad mapping - each digit maps to its corresponding letters
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    /**
     * Recursive helper function to build combinations
     * @param {number} index - current position in digits string
     * @param {string} currentCombination - combination built so far
     */
    function backtrack(index, currentCombination) {
        // Base case: we've processed all digits, add combination to result
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }
        
        // Get current digit and its corresponding letters
        const currentDigit = digits[index];
        const letters = phoneMap[currentDigit];
        
        // Try each letter for current digit
        for (let i = 0; i < letters.length; i++) {
            // Add current letter and recurse for next digit
            backtrack(index + 1, currentCombination + letters[i]);
        }
    }
    
    // Start backtracking from index 0 with empty combination
    backtrack(0, '');
    return result;
}