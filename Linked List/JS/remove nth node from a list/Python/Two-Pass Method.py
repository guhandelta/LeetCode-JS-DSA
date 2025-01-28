# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Calculate the length of the linked list
    length = 0
    current = head
    while current:
        length += 1
        current = current.next

    # Find the position to remove
    position = length - n

    # Use a dummy node to handle edge cases
    dummy = ListNode(0)
    dummy.next = head
    current = dummy

    # Traverse to the node just before the one to be removed
    for _ in range(position):
        current = current.next

    # Remove the node
    current.next = current.next.next

    return dummy.next
