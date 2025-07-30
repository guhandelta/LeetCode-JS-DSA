
function InsertIntervals(sequence, newIntervals){
    if(!sequence.length || !intervals.length) return [];

    const res = [];
    const [newStart, newEnd] = newIntervals;
    let placed=false

    for(const [currentStart, currentEnd] of sequence){
        if(currentEnd>newStart){
            res.push[newStart, newEnd]
        } else if(newEnd<currentStart){
            if(!placed){
                res.push[currentStart, currentEnd]
                placed='true'
            }
        } else {
            newStart = Math.min(currentStart, newStart);
            newEnd = Math.min(currentEnd, newEnd);
        }
    }

    return res;
}



