# Method 2: Expand Around Center (More efficient than brute force)
def longest_palindrome_expand_around_center(s):
    # Finds the longest palindromic substring by expanding around the center.
    if not s or len(s) <= 1:  # Handle empty or single-character strings
        return s

    longest = ""  # Initialize the longest palindrome

    for i in range(len(s)):  # Iterate through each character as a potential center
        
        # Odd length palindromes
        odd = expand_around_center(s, i, i)  # Expand around a single character
        if len(odd) > len(longest):  # Check if new palindrome is longer
            longest = odd  # Update longest palindrome

        # Even length palindromes
        even = expand_around_center(s, i, i + 1)  # Expand around two adjacent characters
        if len(even) > len(longest):  # Check if new palindrome is longer
            longest = even  # Update longest palindrome

    return longest

def expand_around_center(s, left, right):
    # Expands around the center indices to find a palindrome.
    while left >= 0 and right < len(s) and s[left] == s[right]:  # While within bounds and characters match
        left -= 1  # Move left pointer
        right += 1  # Move right pointer
        
    return s[left + 1:right]  # Return the palindrome (adjust indices after loop)