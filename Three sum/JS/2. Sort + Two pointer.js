
/* 
------------------------------------------------------------------------------
    Approach 2 – Fix one index; solve remaining as 2-Sum with a hash-set
    --------------------------------------------------------------------------
    ⏱ Time  O(n²)                – outer loop n × inner scan n
    🗄 Space O(n)                 – hash-set for complements
------------------------------------------------------------------------------
*/

function threeSumHash(nums, target){ 

    if(!nums || nums.length===0 || !target) return;

    let i, j, len = nums.length;
    const out = new Set();

    for(i=0;i<len;i++){
        const seen = new Set();
        for(j=i+1;j<len;j++){
            const compliment = target - nums[i] - nums[j];
            if(seen.has(compliment)){
                const triplet = [nums[i], nums[j], compliment].sort((a,b) => a-b);
                out.add(triplet.toString())
            }
            seen.add(nums[j])
        }
    }
    return [...out].map(str => str.split(',').map(Number))
}