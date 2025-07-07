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
        if(!node) return head           // Fewer than k → no reversal.
        node = node.next;
    }

    /* 2️⃣ Recurse on the remainder of the list (everything *after*
    the first k nodes).  
    – `reversedRest` is the final head of the suffix. */

    const reversedRest = reverseKGroupRecursive(node, k);

    /* 3️⃣ Now reverse the current k-block.  */
    // `prev` will trail the already-reversed part and starts as `reversedRest` so the tail of this block connects seamlessly. 
    const prev = reversedRest;
    const curr = head
    
    for(i=0;i<k;i++){
        const nextTmp = curr.next;             // Save next node.
        curr.next = prev;                      // Reverse pointer.
        prev = curr;                           // Step forward.
        curr = nextTmp;                        // Step forward.
    }

    /* 4️⃣ When the loop ends, `prev` is the new head of this block. */
    return prev;
}


function ListNode(val, next){
    this.next = next?next:null;
    this.val= val ?? 0
}


function reverseKNodesTest(head, k){

    const pointer = new ListNode(0, head);

    let i;

    while(i<k){
        pointer=pointer.next;
    }

    const revNodes = reverseKNodesTest(pointer, k)
    
    const prev=revNodes;
    const curr=head;

    for(i=0;i<k;i++){
        const nxTmp = curr.next;
        curr.next=prev;
        prev=curr;
        curr=nxTmp;
    }

    return prev;
}

function printList(head){

    let pointer = new ListNode(head), out=[];

    while(pointer.next){
        out.push(pointer.val);
        pointer=pointer.next;
    }

    out.join(' -> ')

    return out;
}

const sample = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

const rev = reverseKNodesTest(sample, 3)

printList(rev)