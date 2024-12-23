def remove_duplicates_recursive(nested_array):
    def helper(array, seen):
        result = []
        for item in array:
            if isinstance(item, list):  # Check if the item is a nested list
                result.append(helper(item, seen))  # Recursively process nested lists
            elif item not in seen:  # Check if the item is not already seen
                result.append(item)  # Add unique items
                seen.add(item)  # Mark item as seen
        return result

    return helper(nested_array, set())  # Start recursion with an empty set

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_recursive(nested_array))
