/**
 * Approach: Use array reduce to build combinations functionally
 * Time Complexity: O(4^n) - same complexity but more functional style
 * Space Complexity: O(4^n) for storing intermediate and final results
 */
function letterCombinations3(digits) {
    if (!digits || digits.length === 0) return [];
    
    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    // Convert digits string to array and reduce over each digit
    return digits.split('').reduce((combinations, digit) => {
        const letters = phoneMap[digit];
        const newCombinations = [];
        
        // For each existing combination, append each letter of current digit
        for (let combination of combinations) {
            for (let letter of letters) {
                newCombinations.push(combination + letter);
            }
        }
        
        return newCombinations;
    }, ['']); // Start with array containing empty string
}
