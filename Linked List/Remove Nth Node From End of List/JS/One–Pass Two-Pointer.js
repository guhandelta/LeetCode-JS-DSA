


function ListNode(value, next){
    this.value=value;
    this.next=next;
}

function removeNthFromEnd(head, n){

    let i, length=0;

    const flag = new ListNode(0, head);
    
    while(flag.next){
        flag=flag.next;
        length++;
    }
    
    if(n<=0 || n>length) return
    
    const fast = pointer;
    const slow = pointer;
    
    const pointer = new ListNode(0, head);

    for(i=0;i<n;i++){
        pointer=pointer.next;
    }
    
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }

    slow.next=slow.next?.next;

    return pointer.next

}