


function ListNode(value, next){
    this.value=value;
    this.next=next;
}

function removeNthFromEnd(head, n){

    let i;
    const curr=head
    
    while(curr.next){
        curr=curr.next;
    }
    
    const node = new ListNode(0, head);

    while(i<n){
        node=node.next;
    }

    node.next=node.next?.next;

    return node.next
}


// The preceding code is gives the same result as the following media query:

button {
    aspect-ratio: 1;
    width: 44px;
}

@media (any-pointer: fine) {
    button {
        width: 30px;
    }
}

// The if() will make our lives easier by diluting the code to

button {
    aspect-ratio: 1;
    width: if(media(any-pointer: fine): 30px; else: 44px);
}


// In-line support Queries
body {
    background-color: if(
    supports(color: oklch(0.7 0.185 232)): oklch(0.7 0.185 232);
    else: #00adf3;
    );

    &::after {
        content: if(
        supports(color: oklch(0.7 0.185 232)): "Your browser supports OKLCH";
        else: "Your browser does not support OKLCH";
        );
    }
}


//

<div class="card" data-status="complete">
  ...
</div>

.card {
    --status: attr(data-status type(<custom-ident>));
    border-color: if(
                    style(--status: pending): royalblue;
                    style(--status: complete): seagreen;
                    else: gray);
    background-color: if(
                    style(--status: pending): #eff7fa;
                    style(--status: complete): #f6fff6;
                    else: #f7f7f7);
}
