/**
 * Linear sweep using the sorted property.
 * Time  : O(n)        – one walk
 * Space : O(n)        – result array; O(1) aux
 */

const singlePassLinearSearch(sequence, newIntervals){

    const res = []
    const [newStart, newEnd] = newIntervals;
    const placed = false;
    
    for(const [currentStart, currentEnd] of sequence){
        
        if(newStart>currentEnd){
            res.push([currentStart,currentEnd])
        } else if(currentStart > newEnd) {
            if(!placed){
                res.push([newStart, newEnd])
                placed = true;
            }
            res.push(currentStart, currentEnd)
        } else {
            newStart = Math.min(currentStart, newStart)
            newEnd = Math.max(currentEnd, newEnd)
        }
    }
    
    if(!placed) res.push([newStart, newEnd]) // Pused at teh end if never placed
    
    return res;
}


