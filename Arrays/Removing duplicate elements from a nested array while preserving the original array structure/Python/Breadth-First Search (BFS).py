from collections import deque

def remove_duplicates_bfs(nested_array):
    queue = deque([(nested_array, set())])  # Queue holds (array, seen elements)
    result = []

    while queue:
        array, seen = queue.popleft()
        temp_result = []
        for item in array:
            if isinstance(item, list):
                queue.append((item, seen))  # Add nested arrays to the queue
                temp_result.append(None)  # Placeholder for preserving structure
            elif item not in seen:
                temp_result.append(item)
                seen.add(item)
        result.append(temp_result)

    return result[::-1]  # Reverse for correct order

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_bfs(nested_array))
