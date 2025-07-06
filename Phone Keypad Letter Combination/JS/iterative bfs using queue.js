/**
 * Approach: Build combinations iteratively using a queue, processing one digit at a time
 * Time Complexity: O(4^n) - same as recursive, but with iterative implementation
 * Space Complexity: O(4^n) for storing combinations in queue
 */
function letterCombinations(digits) {
    if (!digits || digits.length === 0) return []; // 1. Empty input check
    
    const map = {                                  // 2. Keypad map
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    const queue = []; // 3. A queue holding the empty prefix.

    for(digit of digits){ // 4. Iterate once per digit (outer loop controls levels).
        const next = [];  // 5. Temporary array to hold next-level prefixes.

        for(const prefix of queue){ // 6. Pop each partial combination in the current level…
            for(const ch of map[digit]){ // 7. …and append every possible new letter.
                next.push(prefix+ch)  // 8. Build new combination and store it.
            }
        }
        queue = next[];  // 9.  Promote next level to be processed by the next digit.
    }

    return queue;
}

console.log(letterCombinations('23'));



