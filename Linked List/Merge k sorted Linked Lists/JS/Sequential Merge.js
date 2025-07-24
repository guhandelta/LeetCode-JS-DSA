
    function ListNode(next, value){
        this.next = next;
        this.value = value;
    }

    function sequentialMerge(lists){
        const merged = null;

        for(const list of lits) mergeTwo(merged, list)

        return merged
    }

    function mergeTwo(l1, l2){

        const node = new ListNode();
        const pointer = node;

        while(l1 && l2){
            if(l1.value<=l2.value){
                pointer = pointer.next = l1;
                l1 = l1.next;
            } else {
                pointer = pointer.next = l2;
                l2 = l2.next;
            }

            pointer.next = l1 || l2;
            return node.next;
        }
    }