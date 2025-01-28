

/**
 * Removes the nth node from the end of a singly linked list.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end of the node to remove.
 * @return {ListNode} - The modified linked list's head.
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases (e.g., removing the head node)
    const dummy = new ListNode(0);
    dummy.next = head;

    /**
     * A recursive function to traverse the linked list and identify
     * the node to remove by its index from the end.
     * @param {ListNode} node - Current node being processed.
     * @return {number} - The index of the node from the end of the list.
     */
    function recursiveRemove(node) {
        if (!node) return 0; // Base case: reached the end of the list

        // Recursive call to process the next node and calculate its index
        const indexFromEnd = recursiveRemove(node.next) + 1;

        // If the current node's next node is the nth node from the end
        if (indexFromEnd === n + 1) {
            // Skip the nth node by updating the current node's next pointer
            node.next = node.next.next;
        }

        // Return the current node's index from the end
        return indexFromEnd;
    }

    // Initiate the recursive removal process starting from the dummy node
    recursiveRemove(dummy);

    // Return the updated list starting from the node after the dummy
    return dummy.next;
};


/*
    Recursive Approach
        Pros:
            - Elegant and concise solution.
            - Automatically manages the backtracking due to recursion, which simplifies code for traversing back to modify the list.
            - Ideal for educational purposes and small-scale applications.
        Cons:
            - Not memory efficient due to the recursion stack, which may lead to stack overflow for large linked lists.
            - Harder to debug and maintain for newcomers.
            - Slower for large lists compared to iterative methods.
        Best Place to Use:
            - When simplicity and elegance are prioritized over performance.
            - For small linked lists where recursion depth is not an issue.
        Worst Place to Use:
            - On extremely large linked lists where recursion depth can exceed call stack limits.
            - In performance-critical systems.
*/









function ListNode(value, next){
    value= value ?? 0;
    next = next ?? null;

    return { value, next }
}

function removeNthNode(list, head){
    const node = new ListNode();
    const ref = node;

    function recursiveRemove(node){

        if(!node) return 0

        const removeFromEnd = recursiveRemove(node.next)+1;

        if(removeFromEnd === n+1){
            ref.next = ref.next.next
        }

        return removeFromEnd

    }

    recursiveRemove(ref)

    return ref.next
}