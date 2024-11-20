
JavaScript

function longestSubStringWithNoRepatingCharacters(s) {
    // Initialize pointers, maximum length, and a map to store character indices
    let left = 0, right = 0, maxLen = 0, longestSubString = '';
    const sLen = s.length;
    const charMap = new Map();

    // Iterate through the string
    while (right < sLen) {
        // If the current character is not in the map or its previous occurrence is before the current left pointer
        if (!charMap.has(s[right]) || charMap.get(s[right]) < left) {
            // Update the character's index in the map
            charMap.set(s[right], right);
            // Move the right pointer to the next character
            right++;
            // Update the maximum length if necessary
            maxLen = Math.max(maxLen, right - left);
            // Update the longest substring if necessary
            longestSubString = s.substring(left, right);
        } else {
            // If the current character is a duplicate, move the left pointer to the position after the previous occurrence
            left = charMap.get(s[right]) + 1;
            // Update the character's index in the map
            charMap.set(s[right], right);
        }
    }

    return [longestSubString, maxLen];
}


const str = "abbccabcd"
const [ longestSubString, maxLen] = longestSubStringWithNoRepatingCharacters(str)
console.log(`String lenght:\t ${maxLen}`);
console.log(`subString:\t ${longestSubString}`);
