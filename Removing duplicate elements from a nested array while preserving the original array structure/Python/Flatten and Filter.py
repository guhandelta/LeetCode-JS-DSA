def remove_duplicates_flatten_and_filter(nested_array):
    def flatten(array):
        for item in array:
            if isinstance(item, list):
                yield from flatten(item)  # Recursively yield items
            else:
                yield item

    flattened = list(flatten(nested_array))  # Flatten the nested array
    unique_items = list(dict.fromkeys(flattened))  # Remove duplicates and preserve order

    def rebuild_structure(array, unique_iter):
        result = []
        for item in array:
            if isinstance(item, list):
                result.append(rebuild_structure(item, unique_iter))  # Rebuild nested structure
            else:
                result.append(next(unique_iter))  # Map unique items back
        return result

    return rebuild_structure(nested_array, iter(unique_items))

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_flatten_and_filter(nested_array))
