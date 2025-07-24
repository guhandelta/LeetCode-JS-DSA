class TreeNode:
    def __init__(self, value=None):
        self.value = value
        self.children = []  # To hold nested elements

def array_to_tree(array):
    if not isinstance(array, list):
        return TreeNode(array)
    node = TreeNode()
    for item in array:
        node.children.append(array_to_tree(item))
    return node

def tree_to_array(node, seen):
    if node.value is not None:
        if node.value in seen:
            return None
        seen.add(node.value)
        return node.value
    result = []
    for child in node.children:
        child_result = tree_to_array(child, seen)
        if child_result is not None:
            result.append(child_result)
    return result

def remove_duplicates_tree(nested_array):
    tree = array_to_tree(nested_array)
    return tree_to_array(tree, set())

# Example
nested_array = [[1, 2, 2, 3], [4, [5, 6, 6], 4], [7, [8, 8, [9, 9]]]]
print(remove_duplicates_tree(nested_array))
