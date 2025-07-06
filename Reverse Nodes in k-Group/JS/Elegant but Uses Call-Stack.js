/* ──────────────────────────────────────────────────────────────────────────
    Divide-and-Conquer recursion
    ──────────────────────────────────────────────────────────────────────────
    ⏱ Time   O(n)          – each node is visited exactly once
    🗄 Space  O(n / k)      – recursion depth equals # of full k-groups
    ------------------------------------------------------------------------*/

/**
 * Reverse nodes k-at-a-time using recursion.
 * @param {ListNode} head
 * @param {number}   k
 * @return {ListNode}
 */

function reverseKGroupRecursive(head, k) {

    /* 1️⃣ Verify there are *at least* k nodes left.
    If not, we simply return `head` unchanged. */
    let node = head, i;
    for(i=0;i<k;i++){
        if(!node) return head
        node = node.next;
    }

    /* 2️⃣ Recurse on the remainder of the list (everything *after*
    the first k nodes).  
    – `reversedRest` is the final head of the suffix. */

    const reversedRest = reverseKGroupRecursive(node, k);
}