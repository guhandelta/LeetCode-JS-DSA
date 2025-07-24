
/* 
------------------------------------------------------------------------------
    Approach 2 – Fix one index; solve remaining as 2-Sum with a hash-set
    --------------------------------------------------------------------------
    ⏱ Time  O(n²)                – outer loop n × inner scan n
    🗄 Space O(n)                 – hash-set for complements
------------------------------------------------------------------------------
*/

function threeSumHash(nums, target){ 

    if(!nums || nums.length<3){

        console.log('The input array should atleast have 3 elements');
        return{
            exactmatch: null,
            lesserTriplet: null,
            greaterTriplet: null,
        }
    } 
    
    const len=nums.length;
    
    for(let i=0;i<len-2;i++){
        
        
        let left = i+1, right = nums.len-1;
        
        const currentSum = nums[i] + nums[left] + nums[right];
        if(currentSum === target){
            
            return{
                exactmatch: [nums[i], nums[left], nums[right]],
                lesserTriplet: null,
                greaterTriplet: null,
            }
        }
        if(currentSum < target){
            const diff = target - Math.abs(nums[i] + nums[left] + nums[right]);
            const closestDiff = 

        }else{
            
        }

    }
}



function threesumHash(nums, target){


    let i, j;

    const len = nums.length, out = new Set();

    if(!nums || nums.length < 3) return 'The input array should have atleast 3 elements';

    for(i=0;i<len;i++){
        const seen = new Set();
        for(j=i+1;j<n;j++){
            const compliment = target - nums[i] - nums[j];
            if(seen.has(compliment){
                const calc = [nums[i], nums[j], compliment].sort((a,b) => a-b).toString()
                out.add(calc)
            })
            seen.add(nums[j])
        }
    }
    return [...out].map(str => str.split('')).map(Number);
}