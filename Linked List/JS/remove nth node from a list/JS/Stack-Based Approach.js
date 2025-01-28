/**
 * Removes the nth node from the end of a singly linked list using a stack.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position from the end of the node to remove.
 * @return {ListNode} - The modified linked list's head.
 */
// This code defines a function named `removeNthFromEnd` that takes two arguments:
//   * `head`: This is the head node of a linked list. A linked list is a linear data structure where each element (node) contains data and a reference (next) to the next element in the list.
//   * `n`: This is an integer representing the nth node from the end of the linked list to be removed.

var removeNthFromEnd = function(head, n) {
    // Create a dummy node with a value of 0 and prepend it to the beginning of the linked list.
    // This dummy node serves two purposes:
    //   1. It simplifies the handling of edge cases, such as removing the head node (n = 1).
    //   2. It ensures that the 'prev' node (explained later) will always have a valid next pointer.
    const dummy = new ListNode(0);
    dummy.next = head;

    // Create an empty stack to store the linked list nodes.
    const stack = [];

    // Initialize a current node pointer to point to the dummy node.
    let current = dummy;

    // Iterate through the linked list using a while loop.
    while (current) {
        // Push the current node onto the stack.
        stack.push(current);

        // Move the current node pointer to the next node in the linked list.
        current = current.next;
    }

    // Iterate through the stack n times (or up to the length of the stack if n is greater than the list length).
    // This loop removes the nth node from the end of the linked list by popping nodes off the stack.
    for (let i = 0; i < n && i < stack.length; i++) {
        stack.pop();
    }

    // After iterating n times, the node at the top of the stack (prev) will be the node located before the nth node from the end.
        const prev = stack[stack.length - 1];

    // If the stack is not empty (i.e., there are nodes remaining in the list after removing the nth node),
    // update the next pointer of the 'prev' node to skip over the nth node (which has been effectively removed).
    if (prev) {
        prev.next = prev.next.next;
    }

    // Return the head node of the modified linked list, which is the dummy node's next pointer (the original head node).
        return dummy.next;
};


/*

    Stack-Based Approach
        Pros:
            - Simplifies the logic of determining the nth node from the end by using a stack.
            - Does not require explicit recursion or additional pointer management.
            - Maintains constant time access to the nth node once stack is populated.
        Cons:
            - Requires extra space proportional to the size of the list for the stack.
            - Can become slow due to the additional overhead of stack operations.
        Best Place to Use:
            - When the linked list is moderately sized and readability is more important than space optimization.
            - In scenarios where stack-based algorithms are preferred for consistency in code style.
        Worst Place to Use:
            - When working with memory-constrained environments.
            - On extremely large linked lists where stack size would be a limiting factor.

*/


function ListNode(value, next){
    value = value ?? 0;
    next = next ?? null;

    return { value, next }
}

function removeNthFromEnds(head, n){
    
    const node = new ListNode(0);
    node.next = head;

    const stack = [];
    
    let ref = node;

    while(ref){
        if(!ref) return;

        stack.push(ref.value);
        ref = ref.next;
    }

    let i;
    const len = stack.length;
    for(i=0;i<len && i<n;i++){
        stack.pop();
    }

    const prev = stack[stack.length-1];

    if(prev){
        prev.next = prev.next.next
    }

    return ref.next
}

function printList(head){
    const node = head;

    const res = '';

    while(node){
        res += res.value + " -> ";
        res = res.next
    }

    res += "null"

    console.log(`Cleaned List: ${res}`)
}


const l1 = new ListNode(12, new ListNode(23, new ListNode(34, new ListNode(45, new ListNode(56, new ListNode(67, new ListNode(78)))))));

const cleanedList = removeNthFromEnds(l1, 4);

printList(cleanedList)