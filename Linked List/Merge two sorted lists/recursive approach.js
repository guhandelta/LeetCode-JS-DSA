// This is the recursive approach
// Time Complexity: O(n + m)
// Space Complexity: O(n + m) (recursion stack)

function ListNode(value, next){

    value = value ?? 0;
    next = next ?? null;

    return { value, next }
}

/**
 * This function merges two sorted linked lists into a single sorted linked list.
 *
 * @param {ListNode | null} l1 - The first linked list.
 * @param {ListNode | null} l2 - The second linked list.
 * @returns {ListNode | null} - The merged sorted linked list.
 */
function mergeTwoLists(l1, l2) {
    // If the first linked list is empty, return the second linked list (base case).
    if (l1 === null) return l2;

    // If the second linked list is empty, return the first linked list (base case).
    if (l2 === null) return l1;

    // Compare the values of the head nodes of both lists.
    if (l1.val <= l2.val) {
      // If the value in the first list is less than or equal to the value in the second list:
      //  - Recursively merge the remaining nodes of the first list with the rest of the second list.
      //  - Set the `next` pointer of the head node of the first list to the result of the merge.
      //  - Return the head node of the first list (which now points to the merged list).
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
      // If the value in the second list is less than the value in the first list:
      //  - Recursively merge the first list with the remaining nodes of the second list.
      //  - Set the `next` pointer of the head node of the second list to the result of the merge.
      //  - Return the head node of the second list (which now points to the merged list).
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
