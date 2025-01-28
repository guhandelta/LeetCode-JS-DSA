//  Expand Around Center (More efficient than brute force)
function longestPalindromeExpandAroundCenter(s) {
    // Handle edge cases: empty or single-character strings
    if (!s || s.length <= 1) return s;

    let longest = ""; // Initialize the longest palindrome
    let longestLength=0;

    // Iterate through each character as a potential center
    for (let i = 0; i < s.length; i++) {
        // Expand around the center for odd-length palindromes
        const odd = expandAroundCenter(s, i, i);
        
        // If the new palindrome is longer, update the longest
        if (odd.length > longestLength) {
            longest = odd;
            longestLength = longest.length;
        }

        // Expand around the center for even-length palindromes
        const even = expandAroundCenter(s, i, i + 1);

        // If the new palindrome is longer, update the longest
        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest; // Return the longest palindrome found
}

  // Helper function to expand around the center
function expandAroundCenter(s, left, right) {
    // Expand while within bounds and characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--; // Move left pointer to the left
        right++; // Move right pointer to the right
    }
    
    // Return the palindrome (adjust indices after loop)
    return s.substring(left + 1, right);
}