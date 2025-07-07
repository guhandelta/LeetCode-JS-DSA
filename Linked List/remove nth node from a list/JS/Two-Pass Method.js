/**
 * Removes the nth node from the end of a singly linked list using a two-pass approach.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end of the node to remove.
 * @return {ListNode} - The modified linked list's head.
 */
var removeNthFromEnd = function(head, n) {
    // Step 1: Calculate the length of the linked list
    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    // Step 2: Calculate the position of the node to remove (0-based index)
    const position = length - n;

    // Step 3: Use a dummy node to simplify edge case handling
    const dummy = new ListNode(0);
    dummy.next = head;

    // Reinitialize `current` to start from the dummy node
    current = dummy;

    // Step 4: Traverse to the node just before the one to be removed
    for (let i = 0; i < position; i++) {
        current = current.next;
    }

    // Step 5: Remove the target node by updating the `next` pointer
    current.next = current.next.next;

    // Step 6: Return the modified list, skipping the dummy node
    return dummy.next;
};


/*
    4. Two-Pass Method
        Pros:
            - Simple to implement and understand.
            - Suitable for straightforward scenarios where memory usage is not a concern.
            - Does not require advanced pointer manipulation.
        Cons:
            - Less efficient due to two traversals, resulting in O(2n) time complexity (still linear).
            - Not ideal for performance-critical systems with large datasets.
        Best Place to Use:
            - When clarity and ease of implementation are the top priorities.
            - In scenarios where the overhead of two passes is negligible compared to the overall workload.
        Worst Place to Use:
            - For large linked lists where a single traversal solution is more appropriate.
            - In performance-critical systems where time optimization is essential.
*/ 
