/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring.
 */
function lengthOfLongestSubstring(s) {
    // Initialize variables
    let maxLength = 0;
    let start = 0, end=0;
    const charSet = new Set();

    // Iterate through the string
    for (end = 0; end < s.length; end++) {
        // If the current character is already in the set,
        // remove characters from the beginning of the substring
        // until the duplicate character is removed
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(s[end]);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
}

const str = "abcabcbb";
const longestSubstringLength = lengthOfLongestSubstring(str);
console.log(longestSubstringLength); // Output: 3 (Substring: "abc")