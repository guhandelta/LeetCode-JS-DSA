/*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

const jump_greedy(nums){
    
    if(nums.length <=1) return 0;

    let jumps = 0;
    let end = 0;
    let farthest = 0;

    for(let i=0;i<nums.length-1;i++){

        farthest = Math.max(farthest, nums[i]+i);

        if(i===end){
            jumps++;
            end=farthest
        }

        // Just a check to stop checking and updatinf the end after nearing the end 
        if(end === nums.length-1) break;
    }

    return jumps
}