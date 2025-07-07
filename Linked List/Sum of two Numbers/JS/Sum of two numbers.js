/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Example ListNode definition (if not provided in the environment)
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    // Initialize carry to 0. This variable will store the carry-over value 
    // when the sum of two digits exceeds 9.
    let carry = 0;

    // Create a dummy head node. This simplifies the code by avoiding 
    // special handling for the first node of the result list.
    const dummyHead = new ListNode(0);

    // Initialize a pointer to traverse the result list.
    let current = dummyHead;

    // Iterate while either list has nodes remaining or there's a carry.
    while (l1 || l2 || carry) {
        // Get the values of the current nodes, or 0 if a list is exhausted.
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate the sum of the current digits and the carry.
        const sum = val1 + val2 + carry;
        console.log(`Sum:${carry}   carry:${carry}`);
        

        // Calculate the new carry. Integer division by 10 gives the carry.
        carry = Math.floor(sum / 10);

        // Create a new node with the digit (sum modulo 10) and append it to the result list.
        current.next = new ListNode(sum % 10);

        // Move the current pointer to the newly created node.
        current = current.next;

        // Move to the next nodes in the input lists, if available.
        l1 = l1 ? l1.next : null;
        l2 = l2.next ?? null; // Both methods achieve the same behavior using optional chaining and the nullish coalescing operator (??) for a default value of null.. You can choose whichever one you find more readable based on your preference.
    }

    // Return the next node of the dummy head, which is the actual head of the result list.
    return dummyHead.next;
};
// Helper function to print the linked list
function printList(head){

    const current = head
    let res = ""

    while(current){
        res += current.value + " -> ";
        current =  current.next;
    }

    res += "null"
    console.log(`The sum: ${res}`);
    
}
// Create two sample linked lists
const l1 = new ListNode(3, new ListNode(4, new ListNode(5)))
const l2 = new ListNode(6, new ListNode(7, new ListNode(8)))

// Calculate the sum of the linked lists
const sumList = addTwoNumbers(l1. l2);

// Print the resulting linked list
printList(sumList)

