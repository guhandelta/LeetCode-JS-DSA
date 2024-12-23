def remove_duplicates_hash_mapping(nested_array):
    seen = {}

    def process(array):
        result = []
        for item in array:
            if isinstance(item, list):
                result.append(process(item))  # Recursively process nested lists
            elif item not in seen:
                result.append(item)  # Add unique items
                seen[item] = True  # Mark item as seen in the hash map
        return result

    return process(nested_array)

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_hash_mapping(nested_array))
