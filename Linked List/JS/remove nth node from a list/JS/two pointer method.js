/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head - The head of the linked list
 * @param {number} n - The position from the end of the list to remove
 * @return {ListNode} - The head of the modified list
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases (e.g., removing the head node)
    const dummy = new ListNode(0);
    dummy.next = head;

    // Initialize two pointers, both starting from the dummy node
    let slow = dummy;
    let fast = dummy;

    // Move the fast pointer `n+1` steps ahead to create a gap of `n` between slow and fast
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers one step at a time until fast reaches the end of the list
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // At this point, slow is at the node just before the one to be removed
    // Skip the n-th node from the end
    slow.next = slow.next.next;

    // Return the new head of the list (which might have changed)
    return dummy.next;
};

// Example usage:
// Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
// Output: 1 -> 2 -> 3 -> 5
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(head, 2));


/*
When to Use:
    - When space efficiency is critical, and you want to avoid using extra memory.
    - When you need the most optimized and scalable solution for large linked lists.
Why Use:
    - It has a time complexity of O(L)O(L)O(L) and space complexity of O(1)O(1)O(1).
    - The single traversal makes it efficient and fast.
    - Handles all edge cases (e.g., removing the head or tail node) effectively.
Where to Avoid:
    - When code simplicity or readability is more critical than efficiency.
    - If the problem constraints allow small data sizes and don't require strict performance optimization.
Why Not Use:
    - Requires careful pointer manipulation, which can be tricky and error-prone, especially for beginners.

    Two-Pointer Method
        Pros:
            - Optimized for both time and space: O(n) time complexity and O(1) space complexity.
            - Straightforward and efficient for removing the nth node in a single traversal.
            - Works well in both singly and doubly linked lists.
        Cons:
            - Slightly complex to implement compared to recursive or stack-based methods.
            - Requires careful pointer manipulation, which might introduce bugs.
        Best Place to Use:
            - For performance-critical applications where both speed and space optimization are essential.
            - On large linked lists to avoid recursion depth issues or stack overhead.
        Worst Place to Use:
            - For beginners who may struggle with pointer manipulation and edge cases.
            - In highly abstracted or educational contexts where simplicity is more important than efficiency.

*/

