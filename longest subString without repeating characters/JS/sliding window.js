function longestSubStringWithNoRepatingCharacters(s) {
    // Initialize pointers and variables
    let left = 0, right = 0; // Pointers for the sliding window
    let maxLen = 0; // To store the maximum length of the substring
    let longestSubString = ''; // To store the actual longest substring

    // Get the length of the input string for efficient access
    const sLen = s.length;

    // Create a Set to store unique characters in the current window
    const charSet = new Set();

    // Iterate through the string using the sliding window approach
    while (right < sLen) {
        // If the current character is not in the set, it's unique
        if (!charSet.has(s[right])) {
            // Add the character to the set
            charSet.add(s[right]);

            // Update the maximum length if the current window size is larger
            maxLen = Math.max(maxLen, charSet.size);

            // If the current window size equals the maximum length, update the longest substring
            if (maxLen === charSet.size) {
                longestSubString = s.substring(left, right + 1);
            }

            // Move the right pointer to expand the window
            right++;
        } else {
            // If the character is already in the set, it's a duplicate
            // Remove the character at the left pointer to shrink the window
            charSet.delete(s[left]);

            // Move the left pointer to the next character
            left++;
        }
    }

    // Return the longest substring and its length
    return [longestSubString, maxLen];
}

// Test the function with the given string
const test = "abcabcbb";
const [longestSubString, maxLen] = longestSubStringWithNoRepatingCharacters(test);
console.log("longestSubStringWithNoRepatingCharacters:\t", longestSubString);
console.log("maxLen:\t", maxLen);