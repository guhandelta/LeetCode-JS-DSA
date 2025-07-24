def longest_substring_with_no_repeating_characters(s):
    # Initialize pointers, maximum length, and a dictionary to store character indices
    left = 0  # Left pointer for the sliding window
    max_len = 0  # To store the maximum length of the substring
    longest_substring = ''  # To store the actual longest substring
    char_map = {}  # Dictionary to store the latest index of each character

    # Iterate through the string using the right pointer
    for right, current_char in enumerate(s):
        # If the character is in the map and its index is on or after the left pointer
        if current_char in char_map and char_map[current_char] >= left:
            # Move the left pointer to the position after the previous occurrence
            left = char_map[current_char] + 1

        # Update the character's index in the map
        char_map[current_char] = right

        # Update the maximum length and longest substring if the current window is larger
        if right - left + 1 > max_len:
            max_len = right - left + 1
            longest_substring = s[left:right + 1]

    # Return the longest substring and its length
    return longest_substring, max_len

# Test the function with the given string
str_input = "abbccabcd"
longest_substring, max_len = longest_substring_with_no_repeating_characters(str_input)
print(f"String length:\t {max_len}")
print(f"Substring:\t {longest_substring}")