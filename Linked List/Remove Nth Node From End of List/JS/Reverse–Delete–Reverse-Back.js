


function ListNode(value, next){
    this.value=value ?? 0;
    this.next=next ? next : null;
}

function reverseList(head){

    let prev = null;
    let curr = head;

    while(curr){
        const nxTmp = curr.next;
        curr.next=prev;
        prev = curr;
        curr = nxTmp
    }

    return prev
}


function reverseDeleteReverseBack(head, n){
    
    const Node = new ListNode(0, head);
    let pointer = Node

    let i, length=0;

    while(pointer){
        pointer=pointer.next;
        length++;
    }

    if(n<0 || n>length) return head;

    const target = length-n;

    const reversedList = reverseList(head);
    pointer = reversedList;

    for(i=0;i<target;i++){
        pointer=pointer.next;
    }

    pointer.next=pointer.next?.next;

    return reverseList(reversedList);
}