class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    # Initialize carry to 0.
    carry=0

    node = ListNode()
    current = node
    
    while l1 or l2 or carry:
        v1 = l1.value if l1 else 0
        v2 = l2.value if l2 else 0
        
        sum = v1 + v2 + carry
        
        carry = sum/10
        
        current.next=ListNode(sum%10)
        
        current = current.next
        
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None

    return current.next