# Efficient, good for understanding pattern
def longest_palindrome_dp(s):
    
    # Finds the longest palindromic substring using dynamic programming.
    if not s or len(s) <= 1:  # Handle empty or single-character strings
        return s

    n = len(s)  # Get string length
    dp = [[False] * n for _ in range(n)]  # Create DP table (n x n)
    longest_start = 0  # Initialize start index of longest palindrome
    max_length = 1  # Initialize length of longest palindrome

    # Base case: single characters are palindromes
    for i in range(n):  # Iterate through all characters
        dp[i][i] = True  # Set diagonal to True (single characters)

    # Check for palindromes of length 2
    for i in range(n - 1):  # Iterate up to n-2
        if s[i] == s[i + 1]:  # If two adjacent characters are same
            dp[i][i + 1] = True  # Mark as palindrome
            longest_start = i  # Update start index
            max_length = 2  # Update max length

    # Check for palindromes of length 3 or greater
    for length in range(3, n + 1):  # Iterate through lengths from 3 to n
        for i in range(n - length + 1):  # Iterate through possible start indices
            j = i + length - 1  # Calculate end index
            if s[i] == s[j] and dp[i + 1][j - 1]:  # Check if outer chars match and inner substring is palindrome
                dp[i][j] = True  # Mark as palindrome
                if length > max_length:  # If new length is greater
                    longest_start = i  # Update start index
                    max_length = length  # Update max length

    return s[longest_start:longest_start + max_length]  # Return longest palindrome