


function bfsByRange(nums){
    if(nums.length <= 1) return 0;

    const jumps = 0;
    const currentStart = 0;
    const currentEnd = 0;
    let nextEnd = 0;

    while(currentEnd<=nums.length-1){
    
        jumps++
        
        for(let i = currentStart; i<currentEnd;i++){
            nextEnd = Math.max(currentEnd, nums[i]+1);
            if(nextEnd<= nums.length-1) break;
        }
        currentStart = currentEnd + 1
        currentEnd = nextEnd;
    }

    return jumps;
}