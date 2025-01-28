# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    stack = []
    dummy = ListNode(0)
    dummy.next = head
    current = dummy

    # Push all nodes onto the stack
    while current:
        stack.append(current)
        current = current.next

    # Pop n nodes from the stack
    for _ in range(n):
        stack.pop()

    # Get the node just before the target node
    prev = stack[-1]
    prev.next = prev.next.next

    return dummy.next
