# Simple but inefficient for large strings
def longest_palindrome_brute_force(s):
    # Finds the longest palindromic substring using brute force.
    if not s or len(s) <= 1:  # Handle empty or single-character strings
        return s

    longest = ""  # Initialize the longest palindrome

    for i in range(len(s)):  # Iterate through all possible start indices
        for j in range(i, len(s)):  # Iterate through all possible end indices
            sub = s[i:j + 1]  # Extract the substring
            if is_palindrome(sub) and len(sub) > len(longest):  # Check if it's a palindrome and longer than current longest
                longest = sub  # Update longest palindrome
    return longest

def is_palindrome(s):
    # Checks if a string is a palindrome.
    return s == s[::-1]  # Efficiently reverse and compare string