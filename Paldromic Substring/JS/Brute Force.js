// Brute Force (Simple but inefficient for large strings)
function longestPalindromeBruteForce(s) {
  // Handle edge cases: empty or single-character strings
    if (!s || s.length <= 1) return s;

  let longest = "", longer=0; // Initialize the longest palindrome

  // Iterate through all possible starting positions
    for (let i = 0; i < s.length; i++) {
        // Iterate through all possible ending positions
        for (let j = i; j < s.length; j++) {
            // Extract the substring
            const sub = s.substring(i, j + 1);
            // Check if the substring is a palindrome and longer than the current longest
            if (isPalindrome(sub) && sub.length > longer) {
                longest = sub; // Update the longest palindrome
                longer = longest.length
            }
        }
    }

  return longest; // Return the longest palindrome found
}

// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    // Reverse the string and compare it to the original
    return str === str.split("").reverse().join("");
}