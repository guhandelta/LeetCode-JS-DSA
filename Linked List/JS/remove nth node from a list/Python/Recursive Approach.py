# Definition for singly-linked list node.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    """
    Removes the nth node from the end of a singly linked list using a recursive approach.

    Args:
    head (ListNode): Head of the linked list.
    n (int): Position from the end of the node to remove.

    Returns:
    ListNode: Head of the modified linked list.
    """
    # Step 1: Create a dummy node to simplify edge case handling
    dummy = ListNode(0)
    dummy.next = head

    def recursiveRemove(node):
        """
        Recursive helper function to remove the nth node from the end.

        Args:
        node (ListNode): Current node being processed.

        Returns:
        int: Position of the current node from the end of the list.
        """
        if not node:  # Base case: reached the end of the list
            return 0

        # Step 2: Recursively find the position of the current node from the end
        index = recursiveRemove(node.next) + 1

        # Step 3: If the current node is just before the target node, skip it
        if index == n + 1:
            node.next = node.next.next

        return index

    # Step 4: Start the recursive removal process
    recursiveRemove(dummy)

    # Step 5: Return the updated list, skipping the dummy node
    return dummy.next

'''
    Pros:
        Elegance:

        The recursive approach is concise and avoids manual pointer manipulation, making the code cleaner and easier to read.
        Automatic Backtracking:

        The recursion stack naturally handles backtracking, simplifying the logic for finding the nth node from the end.
        Edge Case Handling:

        The use of a dummy node ensures edge cases like removing the head node or a single-node list are handled seamlessly.
        Recursive Logic:

        Ideal for demonstrating recursion in linked list problems, making it a good teaching tool.
        
        Cons:
        Memory Overhead:

        Recursion uses additional memory for the call stack, making it less efficient for large linked lists.
        Risk of Stack Overflow:

        For very large linked lists, the recursion depth can exceed the system's limit, leading to a stack overflow error.
        Debugging Complexity:

        Recursive functions can be harder to debug, especially for beginners, due to the nature of stack unwinding.
        Best Place to Use:
        Small to Medium Linked Lists:

        Suitable when the list size is small enough that recursion depth won’t be an issue.
        Educational Purposes:

        Useful for teaching recursion concepts and demonstrating its application in linked list problems.
        Simplicity Prioritized Over Performance:

        Ideal when readability and maintainability of code are more important than raw efficiency.
        Worst Place to Use:
        Large Linked Lists:

        For lists with a very large number of nodes, recursion depth may exceed stack limits.
        Performance-Critical Applications:

        In scenarios where memory and speed optimization are critical, this approach may not be the best.
        Memory-Constrained Environments:

        Systems with limited memory cannot handle the additional stack overhead introduced by recursion.

'''