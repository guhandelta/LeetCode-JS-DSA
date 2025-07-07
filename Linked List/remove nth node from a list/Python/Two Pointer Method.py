# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    """
    :type head: ListNode
    :type n: int
    :rtype: ListNode
    """
    # Create a dummy node to handle edge cases (e.g., removing the head node)
    dummy = ListNode(0)
    dummy.next = head

    # Initialize two pointers, both starting from the dummy node
    slow = dummy
    fast = dummy

    # Move the fast pointer `n+1` steps ahead to create a gap of `n` between slow and fast
    for _ in range(n + 1):
        fast = fast.next

    # Move both pointers one step at a time until fast reaches the end of the list
    while fast:
        slow = slow.next
        fast = fast.next

    # At this point, slow is at the node just before the one to be removed
    # Skip the n-th node from the end
    slow.next = slow.next.next

    # Return the new head of the list (which might have changed)
    return dummy.next

# Example usage:
# Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
# Output: 1 -> 2 -> 3 -> 5
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
new_head = removeNthFromEnd(head, 2)

# Print the resulting linked list
current = new_head
while current:
    print(current.val, end=" -> " if current.next else "\n")
    current = current.next

# When to Use:
#     - When space efficiency is critical, and you want to avoid using extra memory.
#     - When you need the most optimized and scalable solution for large linked lists.
# Why Use:
#     - It has a time complexity of O(L)O(L)O(L) and space complexity of O(1)O(1)O(1).
#     - The single traversal makes it efficient and fast.
#     - Handles all edge cases (e.g., removing the head or tail node) effectively.
# Where to Avoid:
#     - When code simplicity or readability is more critical than efficiency.
#     - If the problem constraints allow small data sizes and don't require strict performance optimization.
# Why Not Use:
#     - Requires careful pointer manipulation, which can be tricky and error-prone, especially for beginners.

