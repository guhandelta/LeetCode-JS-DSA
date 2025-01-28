// Dynamic Programming (Efficient, good for understanding pattern)
function longestPalindromeDP(s) {
    // Handle edge cases: empty or single-character strings
    if (!s || s.length <= 1) return s;

    const n = s.length; // Get the length of the string
    // Create a 2D array (DP table) initialized to false
    const dp = Array(n).fill(null).map(() => Array(n).fill(false));
    let longestStart = 0; // Initialize the starting index of the longest palindrome
    let maxLength = 1; // Initialize the maximum length of the palindrome

    // Base case: single characters are palindromes
    for (let i = 0; i < n; i++) {
      dp[i][i] = true; // Set the diagonal elements to true
    }

    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) { // If two adjacent characters are the same
            dp[i][i + 1] = true; // Mark them as a palindrome in the DP table
            longestStart = i; // Update the starting index
            maxLength = 2; // Update the maximum length
        }
    }

    // Check for palindromes of length 3 or greater
    for (let len = 3; len <= n; len++) { // Iterate through possible lengths
        for (let i = 0; i <= n - len; i++) { // Iterate through possible starting indices
            const j = i + len - 1; // Calculate the ending index
            // If the outer characters match and the inner substring is a palindrome
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true; // Mark the current substring as a palindrome
                if (len > maxLength) { // If the current length is greater than the maximum length
                    longestStart = i; // Update the starting index
                    maxLength = len; // Update the maximum length
                }
            }
        }
    }
    // Return the longest palindromic substring
    return s.substring(longestStart, longestStart + maxLength);
}