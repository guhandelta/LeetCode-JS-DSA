def remove_duplicates_dfs(nested_array):
    stack = [(nested_array, set())]  # Stack holds (array, seen elements)
    result = []

    while stack:
        array, seen = stack.pop()
        temp_result = []
        for item in array:
            if isinstance(item, list):
                stack.append((item, seen))  # Push nested arrays onto the stack
                temp_result.append(None)  # Placeholder for structure preservation
            elif item not in seen:
                temp_result.append(item)
                seen.add(item)
        result.append(temp_result)

    return result[::-1]  # Reverse the result for proper order

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_dfs(nested_array))
