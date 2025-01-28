// This is iterative method, which is the most optimal
// Time Complexity: O(n + m)
// Space Complexity: O(1) (reuses existing nodes)

function ListNode(value, next){

    value = value ?? 0;
    next = next ?? null;

    return { value, next }
}

function mergeTwoLists(l1, l2) {
    // Dummy node to simplify edge cases (e.g., empty lists)
    const dummy = new ListNode();
    let head = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }

    // Attach remaining nodes from either list
    head.next = l1 !== null ? l1 : l2;

    return dummy.next;
}