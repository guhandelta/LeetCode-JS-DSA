def longest_substring_with_no_repeating_characters(s):
    # Initialize pointers and variables
    left = 0
    right = 0  # Pointers for the sliding window
    max_len = 0  # To store the maximum length of the substring
    longest_substring = ''  # To store the actual longest substring

    # Get the length of the input string for efficient access
    s_len = len(s)

    # Create a set to store unique characters in the current window
    char_set = set()

    # Iterate through the string using the sliding window approach
    while right < s_len:
        # If the current character is not in the set, it's unique
        if s[right] not in char_set:
            # Add the character to the set
            char_set.add(s[right])

            # Update the maximum length if the current window size is larger
            if len(char_set) > max_len:
                max_len = len(char_set)
                longest_substring = s[left:right + 1]

            # Move the right pointer to expand the window
            right += 1
        else:
            # If the character is already in the set, it's a duplicate
            # Remove the character at the left pointer to shrink the window
            char_set.remove(s[left])

            # Move the left pointer to the next character
            left += 1

    # Return the longest substring and its length
    return longest_substring, max_len

# Test the function with the given string
test = "abcabcbb"
longest_substring, max_len = longest_substring_with_no_repeating_characters(test)
print("longest_substring_with_no_repeating_characters:\t", longest_substring)
print("max_len:\t", max_len)
