
function ListNode(next, value){
    this.next=next;
    this.value=value;

}


function collectAndSort(lists){
    if(lists.length < 1) return [];

    const values = [];

    // Iterate through the list of sorted lists and collect the values into an array
    for(const head in lists){
        for(const n = head; n; n=n.next) values.push(n.value)
    }

    // sort the array of collected values
    values.sort((a,b) => a-b);

    // Create a Linkedlist to hold the collecition of sorted values of all the lists 
    const node = new ListNode();
    for(v of values){
        node = node.next = new ListNode(v)
    }

    return values;
}